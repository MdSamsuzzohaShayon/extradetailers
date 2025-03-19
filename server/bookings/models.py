from django.db import models
from services.models import Service
from accounts.models import User


# Create your models here.
class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="orders")
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name="orders")
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=20,
        choices=[("pending", "Pending"), ("completed", "Completed"), ("canceled", "Canceled")],
        default="pending"
    )

    def __str__(self):
        return f"Order {self.id} by {self.user.username}"
