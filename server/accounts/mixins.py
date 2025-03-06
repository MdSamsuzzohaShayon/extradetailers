from rest_framework import permissions
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from .permissions import IsPublicPermission, IsAdminPermission, IsCustomerPermission, IsDetailerPermission, IsGeneralUserPermission


class GeneralUserPermissionMixin:
    """
    Mixin for views that need general user permissions.
    """
    permission_classes = [permissions.IsAuthenticated, IsGeneralUserPermission]


class PublicPermissionMixin:
    permission_classes = [permissions.AllowAny, IsPublicPermission]
    authentication_classes = [BasicAuthentication, SessionAuthentication]


class AdminPermissionMixin:
    permission_classes = [permissions.IsAuthenticated, IsAdminPermission]


class CustomerPermissionMixin:
    permission_classes = [permissions.IsAuthenticated, IsCustomerPermission]


class DetailerPermissionMixin:
    permission_classes = [permissions.IsAuthenticated, IsDetailerPermission]
