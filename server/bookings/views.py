from rest_framework import generics
from .models import Booking
from .serializers import BookingSerializer
from accounts.mixins import CustomerPermissionMixin, GeneralUserPermissionMixin, AdminPermissionMixin


# List all bookings (User can only view their own bookings)
class BookingListView(GeneralUserPermissionMixin, generics.ListAPIView):
    serializer_class = BookingSerializer

    def get_queryset(self):
        user = self.request.user

        if user.is_authenticated and user.role == "admin":
            return Booking.objects.all()  # Admin sees all bookings
        return Booking.objects.filter(user=user)  # Non-admin users see their own bookings only


# Create a new booking (User can only create for themselves)
class BookingCreateView(CustomerPermissionMixin, generics.CreateAPIView):
    serializer_class = BookingSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # Set user automatically


# Retrieve a specific booking (User can only retrieve their own bookings)
class BookingRetrieveView(GeneralUserPermissionMixin, generics.RetrieveAPIView):
    serializer_class = BookingSerializer

    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)  # Only user's bookings


# Update a specific booking (User can only update their own bookings)
class BookingUpdateView(AdminPermissionMixin, generics.UpdateAPIView):
    serializer_class = BookingSerializer
    lookup_field = "pk"  # Ensures lookup by primary key from the URL

    def get_queryset(self):
        if self.request.user.role == 'admin':  # Admins can update any booking
            return Booking.objects.all()
        return Booking.objects.filter(user=self.request.user)  # Users can update only their bookings


# Delete a specific booking (User can only delete their own bookings)
class BookingDeleteView(AdminPermissionMixin, generics.DestroyAPIView):
    serializer_class = BookingSerializer

    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)  # Only user's bookings

    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)  # Only user's orders
