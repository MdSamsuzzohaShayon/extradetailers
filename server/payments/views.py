import stripe
from rest_framework import generics, status
from rest_framework.response import Response
from payments.utils import calculate_order_amount
from payments.serializers import PaymentIntentSerializer

# Create your views here.
class CreatePaymentIntentView(generics.CreateAPIView):
    serializer_class = PaymentIntentSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        items = serializer.validated_data['items']
        amount = calculate_order_amount(items)

        try:
            intent = stripe.PaymentIntent.create(
                amount=amount,
                currency='usd',
                automatic_payment_methods={'enabled': True}
            )
            return Response({'clientSecret': intent['client_secret']}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
