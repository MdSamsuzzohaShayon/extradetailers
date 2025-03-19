import os
from rest_framework import generics, status
from rest_framework.response import Response
from django.core.mail import send_mail
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
from .models import User
from .serializers import UserRegistrationSerializer, UserValidationSerializer, LoginSerializer, EmptySerializer, ForgotPasswordSerializer
from .mixins import PublicPermissionMixin, GeneralUserPermissionMixin, CustomerPermissionMixin, DetailerPermissionMixin


class UserSignupView(PublicPermissionMixin, generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer

    def create(self, request, *args, **kwargs):
        email = request.data.get('email')

        # Check if user already exists but is not validated
        user = User.objects.filter(email=email).first()

        if user:
            if not user.is_validated:
                # Generate a new validation token
                token = RefreshToken.for_user(user)

                # Resend Validation Email
                validation_link = f"{os.getenv('FRONTEND_URL')}/auth/validate-user/?token={str(token.access_token)}"
                send_mail(
                    "Validate Your Account",
                    f"Click the link to validate your account: {validation_link}",
                    os.getenv('EMAIL_HOST_USER'),
                    [user.email],
                    fail_silently=False,
                )

                return Response(
                    {"message": "User already exists but is not validated. A new validation email has been sent."},
                    status=status.HTTP_200_OK
                )
            else:
                return Response({"error": "User with this email already exists and is validated."}, status=status.HTTP_400_BAD_REQUEST)

        # If user does not exist, proceed with signup
        response = super().create(request, *args, **kwargs)
        user = User.objects.get(email=response.data['email'])

        # Generate JWT Token
        token = RefreshToken.for_user(user)

        # Send Validation Email
        validation_link = f"{os.getenv('FRONTEND_URL')}/auth/validate-user/?token={str(token.access_token)}"
        send_mail(
            "Validate Your Account",
            f"Click the link to validate your account: {validation_link}",
            os.getenv('EMAIL_HOST_USER'),
            [user.email],
            fail_silently=False,
        )

        return Response(
            {"message": "User registered successfully. Check your email for validation link."},
            status=status.HTTP_201_CREATED
        )


class ValidateUserView(PublicPermissionMixin, generics.CreateAPIView):
    serializer_class = EmptySerializer

    def create(self, request, *args, **kwargs):
        token = request.data.get("token")

        if not token:
            return Response({"error": "Token is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Decode the token
            decoded_token = AccessToken(token)

            # Get the user from the token
            user = User.objects.get(id=decoded_token["user_id"])

            # Validate the user
            user.is_validated = True
            user.save()

            return Response({"message": "User validated successfully"}, status=status.HTTP_200_OK)

        except AuthenticationFailed:
            return Response({"error": "Invalid or expired token"}, status=status.HTTP_401_UNAUTHORIZED)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(PublicPermissionMixin, generics.CreateAPIView):
    serializer_class = LoginSerializer  # Define a serializer for validation

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data["email"]
        password = serializer.validated_data["password"]

        user = authenticate(request, email=email, password=password)

        if user is None:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        access = str(refresh.access_token)

        response = Response({"message": "Login successful", "access_token": access, "refresh_token": str(refresh)}, status=status.HTTP_200_OK)

        # Set cookies with HttpOnly & Secure flags
        response.set_cookie(
            key="access_token",
            value=access,
            httponly=True,  # Prevent JavaScript access
            secure=False,  # Use HTTPS
            samesite="Lax",  # Allow cross-origin cookies, "None" requires HTTPS, use "Lax" for localhost
            max_age=60 * 30,  # 30 minutes
        )
        response.set_cookie(
            key="refresh_token",
            value=str(refresh),
            httponly=True,
            secure=False,
            samesite="Lax",
            max_age=60 * 60 * 24 * 7,  # 7 days
        )

        response.set_cookie(
            key="user_role",
            value=str(user.role),
            httponly=True,
            secure=False,
            samesite="Lax",
            max_age=60 * 60 * 24 * 7,  # 7 days
        )

        return response


class RefreshTokenView(PublicPermissionMixin, generics.CreateAPIView):
    serializer_class = EmptySerializer

    def create(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get("refresh_token")

        if not refresh_token:
            return Response({"error": "Refresh token missing"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Decode the refresh token
            refresh = RefreshToken(refresh_token)

            # Get user ID from the token payload
            user_id = refresh.payload.get("user_id")  # Default claim is "user_id"

            if not user_id:
                return Response({"error": "Invalid refresh token"}, status=status.HTTP_401_UNAUTHORIZED)

            # Fetch the user instance from the database
            user = User.objects.get(id=user_id)

            # Blacklist the old refresh token (if enabled in SIMPLE_JWT settings)
            refresh.blacklist()

            # Create new refresh & access tokens
            new_refresh_token = RefreshToken.for_user(user)
            access_token = str(new_refresh_token.access_token)

            # Set new tokens in cookies
            response = Response({
                "access_token": access_token,
                "refresh_token": str(new_refresh_token)
            }, status=status.HTTP_200_OK)

            response.set_cookie("access_token", access_token, httponly=True, secure=True, samesite="None", max_age=60 * 30)
            response.set_cookie("refresh_token", str(new_refresh_token), httponly=True, secure=True, samesite="None", max_age=60 * 60 * 24)

            return response
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        except AttributeError:
            return Response({"error": "Invalid or expired refresh token"}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"error": f"Invalid or expired refresh token: {str(e)}"}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(PublicPermissionMixin, generics.CreateAPIView):
    serializer_class = EmptySerializer

    def create(self, request, *args, **kwargs):
        response = Response({"message": "Logout successful"}, status=status.HTTP_200_OK)

        # Delete authentication cookies
        response.delete_cookie("access_token")
        response.delete_cookie("refresh_token")

        return response


class ProtectedView(GeneralUserPermissionMixin, APIView):
    # Adding a dummy serializer_class here to bypass DRF's guess logic
    serializer_class = None

    def get(self, request):
        return Response({"message": "You are authenticated!"})


class ForgotPasswordView(PublicPermissionMixin, generics.CreateAPIView):
    serializer_class = ForgotPasswordSerializer

    def create(self, request, *args, **kwargs):
        email = request.data.get("email")

        if not email:
            return Response({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)

            # Check if there's an existing valid reset token (assuming tokens expire in 15 mins)
            existing_token = RefreshToken.for_user(user)
            existing_access_token = str(existing_token.access_token)

            reset_link = f"{os.getenv('FRONTEND_URL')}/auth/reset-password/?token={existing_access_token}"

            # Send email with reset link
            send_mail(
                "Reset Your Password",
                f"Click the link to reset your password: {reset_link}",
                os.getenv('EMAIL_HOST_USER'),
                [user.email],
                fail_silently=False,
            )

            return Response({"message": "Password reset link sent to your email."}, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response({"error": "User with this email does not exist"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class ResetPasswordView(PublicPermissionMixin, generics.CreateAPIView):
    serializer_class = EmptySerializer

    def create(self, request, *args, **kwargs):
        token = request.data.get("token")
        new_password = request.data.get("new_password")

        if not token or not new_password:
            return Response({"error": "Token and new password are required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            decoded_token = AccessToken(token)
            user = User.objects.get(id=decoded_token["user_id"])

            # Set new password
            user.set_password(new_password)
            user.save()

            return Response({"message": "Password has been reset successfully"}, status=status.HTTP_200_OK)

        except AuthenticationFailed:
            return Response({"error": "Invalid or expired token"}, status=status.HTTP_401_UNAUTHORIZED)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
