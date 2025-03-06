from rest_framework import permissions
from .models import User


class IsGeneralUserPermission(permissions.BasePermission):
    """
    Custom permission to allow access only to active general users.
    """

    def has_permission(self, request, view):
        # Ensure that the request.user is a valid User instance
        if not hasattr(request, 'user') or not isinstance(request.user, User):
            return False

        # Check if the user is active and validated
        if request.user.is_active and request.user.is_validated:
            return True
        return False


class IsAdminPermission(permissions.BasePermission):
    """
    Custom permission to allow access only to admin users.
    """

    def has_permission(self, request, view):
        if request.user.role == 'admin':
            return True
        return False


class IsCustomerPermission(permissions.BasePermission):
    """
    Custom permission to allow access only to admin users.
    """

    def has_permission(self, request, view):
        if request.user.role == 'customer':
            return True
        return False


class IsDetailerPermission(permissions.BasePermission):
    """
    Custom permission to allow access only to admin users.
    """

    def has_permission(self, request, view):
        if request.user.role == 'detailer':
            return True
        return False


class IsPublicPermission(permissions.BasePermission):
    """
    Custom permission to allow access only to admin users.
    """

    def has_permission(self, request, view):
        return True
