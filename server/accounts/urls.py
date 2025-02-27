from django.urls import path
from .views import SignUpView, MyTokenObtainPairView

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
]