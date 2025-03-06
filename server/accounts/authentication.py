# accounts/authentication.py

import logging
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.utils.translation import gettext_lazy as _

class JWTAuthenticationFromCookie(JWTAuthentication):
    def authenticate(self, request):
        token = request.COOKIES.get('access_token')
        if not token:
            raise AuthenticationFailed(_('No access token provided in cookies.'))

        # Validate the token and retrieve the payload
        validated_token = self.get_validated_token(token)

        # Decode the token to get user info and assign to request.user
        user = self.get_user(validated_token)

        # Debugging step
        logging.debug(f"Authenticated user: {user}")

        # Ensure that the request.user is set properly
        request.user = user

        return user, validated_token # Returning tuple

