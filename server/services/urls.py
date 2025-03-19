from django.urls import path
from .views import (
    ServiceListView,
    ServiceCreateView,
    ServiceRetrieveView,
    ServiceDeleteView,
    ServiceUpdateView
)

urlpatterns = [
    path("", ServiceListView.as_view(), name="service-list"),  # List all services
    path("create/", ServiceCreateView.as_view(), name="service-create"),  # Create a new service
    path("<int:pk>/", ServiceRetrieveView.as_view(), name="service-detail"),  # Retrieve & update a service
    path("<int:pk>/update/", ServiceUpdateView.as_view(), name="service-update"),  # Retrieve & update a service
    path("<int:pk>/delete/", ServiceDeleteView.as_view(), name="service-delete"),  # Delete a service
]
