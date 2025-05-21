from django.urls import path
from .views import UserSignupView, ValidateUserView, LoginView, LogoutView, RefreshTokenView, ProtectedView, ForgotPasswordView, ResetPasswordView, CreateUserView, UserListView, UpdateUserView, DeleteUserView

urlpatterns = [
    # Authentication system
    path('signup/', UserSignupView.as_view(), name='signup'),
    path('validate-user/', ValidateUserView.as_view(), name='validate-user'),
    path("login/", LoginView.as_view(), name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("refresh-token/", RefreshTokenView.as_view(), name="refresh-token"),
    path("protected/", ProtectedView.as_view(), name="protected"),
    path("forgot-password/", ForgotPasswordView.as_view(), name="forgot-password"),
    path("reset-password/", ResetPasswordView.as_view(), name="reset-password"),

    # User crud
    path("main/", UserListView.as_view(), name="all-users"),
    path("main/create/", CreateUserView.as_view(), name="create-user"),
    path("main/<pk>/delete/", DeleteUserView.as_view(), name="delete-user"),
    path("main/<pk>/update/", UpdateUserView.as_view(), name="update-user"),
]
