from django.urls import path
from .views import CreatePaymentIntentView, StripeWebhookView

urlpatterns = [
    path('create-payment-intent/', CreatePaymentIntentView.as_view(), name='create-payment-intent'),
    path('confirm-payment-intent/', StripeWebhookView.as_view(), name='stripe-webhook'),
]