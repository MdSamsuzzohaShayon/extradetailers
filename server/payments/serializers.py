import stripe
import os
from django.conf import settings
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.serializers import Serializer, ListField, DictField
from .utils import calculate_order_amount

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")


# ✅ Simple serializer to validate incoming `items`
class PaymentIntentSerializer(Serializer):
    bookings = ListField(child=DictField(), allow_empty=False)
