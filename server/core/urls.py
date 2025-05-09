"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.urls import include
from rest_framework.permissions import AllowAny

urlpatterns = [
    path('admin/', admin.site.urls),
    # Allow schema endpoint without authentication
    path('api/schema/', SpectacularAPIView.as_view(
        permission_classes=[AllowAny],  # Make it public
        authentication_classes=[]  # No authentication required
    ), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(
        url_name="schema",
        permission_classes=[AllowAny],  # Allow everyone to access docs
        authentication_classes=[]), name="docs"),
    path('api/accounts/', include("accounts.urls")),

    path('api/bookings/', include("bookings.urls")),
    path('api/services/', include("services.urls")),
    path('api/payments/', include("payments.urls")),
]
