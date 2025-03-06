# accounts/openapi_extensions.py

from drf_spectacular.extensions import OpenApiAuthenticationExtension
from accounts.authentication import JWTAuthenticationFromCookie  # Import your custom auth class

class JWTAuthenticationFromCookieScheme(OpenApiAuthenticationExtension):
    target_class = "accounts.authentication.JWTAuthenticationFromCookie"
    name = "JWTAuthFromCookie"

    def get_security_definition(self, auto_schema):  # Add `auto_schema` parameter
        return {
            "type": "apiKey",
            "in": "cookie",
            "name": "jwt",  # The cookie storing the JWT token
            "description": "JWT authentication using an HttpOnly cookie.",
        }

