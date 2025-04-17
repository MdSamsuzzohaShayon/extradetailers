import stripe
import os
from rest_framework import generics, status
from rest_framework.response import Response
from payments.utils import calculate_order_amount
from payments.serializers import PaymentIntentSerializer
from accounts.mixins import GeneralUserPermissionMixin, PublicPermissionMixin
from accounts.serializers import EmptySerializer
from bookings.models import Booking  # Assuming app is `bookings`
from services.models import Service


# Create your views here.
class CreatePaymentIntentView(GeneralUserPermissionMixin, generics.CreateAPIView):
    serializer_class = PaymentIntentSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        bookings_data = serializer.validated_data['bookings']

        try:
            amount = calculate_order_amount(bookings_data)
            intent = stripe.PaymentIntent.create(
                amount=amount,
                currency='usd',
                automatic_payment_methods={'enabled': True}
            )

            print("Payment Intent ID: ",intent['id'])

            # Save bookings in database with 'pending' status and this payment_intent.id
            for item in bookings_data:
                service = Service.objects.get(id=item['service'])
                Booking.objects.create(
                    user=request.user,
                    service=service,
                    slot=item.get('slot'),
                    payment_intent_id=intent['id'],
                    status='initialized',
                    paid=False
                )

            return Response({'clientSecret': intent['client_secret']}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)




# Webhook - https://dashboard.stripe.com/test/workbench/webhooks/create?events=payment_intent.succeeded
class StripeWebhookView(PublicPermissionMixin, generics.CreateAPIView):
    serializer_class = EmptySerializer
    def post(self, request, *args, **kwargs):
        payload = request.body
        sig_header = request.META.get('HTTP_STRIPE_SIGNATURE')
        endpoint_secret = os.getenv("STRIPE_WEBHOOK_SECRET")

        # Validate secret configuration
        if not endpoint_secret:
            return Response(
                {'error': 'Stripe webhook secret is not configured on the server.'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        # Validate Stripe signature header
        if not sig_header:
            return Response(
                {'error': 'Missing Stripe Signature header'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Verify and parse Stripe event
        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, endpoint_secret
            )
        except ValueError as e:
            return Response(
                {'error': 'Invalid payload', 'details': str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )
        except stripe.error.SignatureVerificationError as e:
            return Response(
                {'error': 'Invalid Stripe signature', 'details': str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {'error': 'Unexpected error while verifying event', 'details': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        # Event type processing
        try:
            event_type = event['type']

            if event_type == 'charge.succeeded':
                charge_object = event['data']['object']
                payment_intent_id = charge_object['payment_intent']  # <-- Correct key here
                print("Payment Intent ID: ", payment_intent_id)

                bookings = Booking.objects.filter(payment_intent_id=payment_intent_id)
                print(f"Bookings matched: {bookings.count()}")
                updated_count = bookings.update(status='completed', paid=True)

                return Response(
                    {'message': f'Payment succeeded — {updated_count} bookings updated.'},
                    status=status.HTTP_200_OK
                )

            return Response(
                {'message': f'Unhandled event type: {event_type}'},
                status=status.HTTP_200_OK
            )

        except Exception as e:
            return Response(
                {'error': 'Error processing event', 'details': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
