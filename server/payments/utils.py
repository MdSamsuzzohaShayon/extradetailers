from services.models import Service
from django.core.exceptions import ObjectDoesNotExist

def calculate_order_amount(bookings):
    """
    Calculate the total order amount in cents (for Stripe).
    """
    total_price = 0

    for booking in bookings:
        service_id = booking.get('service')
        if not service_id:
            raise ValueError("Each booking must have a 'service' ID.")

        try:
            service = Service.objects.get(id=service_id)
            total_price += service.price
        except ObjectDoesNotExist:
            raise ValueError(f"Service with id {service_id} does not exist.")

    # Stripe expects amount in cents
    return int(total_price * 100)

