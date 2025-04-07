from rest_framework import serializers
from services.serializers import ServiceSerializer
from .models import Booking
from services.models import Service


class BookingSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.username")  # Auto-set user
    service = serializers.PrimaryKeyRelatedField(queryset=Service.objects.all())  # Accepts service ID
    service_details = ServiceSerializer(source="service", read_only=True)  # Nested service details in response
    status = serializers.CharField(read_only=True)  # Status is read-only

    class Meta:
        model = Booking
        fields = ["id", "user", "service", "service_details", "order_date", "status"]