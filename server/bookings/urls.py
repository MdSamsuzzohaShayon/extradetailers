from django.urls import path
from .views import BookingDeleteView, BookingCreateView, BookingListView, BookingUpdateView, BookingRetrieveView

urlpatterns = [
    # Order URLs
    path("", BookingListView.as_view(), name="booking-list"),
    path("create/", BookingCreateView.as_view(), name="booking-create"),
    path("<int:pk>/", BookingRetrieveView.as_view(), name="booking-detail"),
    path("<int:pk>/update/", BookingUpdateView.as_view(), name="booking-update"),
    path("<int:pk>/delete/", BookingDeleteView.as_view(), name="booking-delete"),
]
