from rest_framework import generics, permissions
from .models import Service
from .serializers import ServiceSerializer
from accounts.mixins import PublicPermissionMixin, AdminPermissionMixin


# List all services (Read-only for unauthenticated users)
class ServiceListView(PublicPermissionMixin, generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


# Create a new service (Authenticated users only)
class ServiceCreateView(AdminPermissionMixin, generics.CreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


# Retrieve and update a specific service (Read-only for unauthenticated users)
# Retrieve a specific service (Read-only for unauthenticated users)
class ServiceRetrieveView(PublicPermissionMixin, generics.RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


# Update a specific service (Authenticated users only)
class ServiceUpdateView(AdminPermissionMixin, generics.UpdateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


# Delete a specific service (Authenticated users only)
class ServiceDeleteView(AdminPermissionMixin, generics.DestroyAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
