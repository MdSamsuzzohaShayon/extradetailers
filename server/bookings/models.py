from django.db import models
from services.models import Service, VehicleType
from accounts.models import User




# Create your models here.
class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="orders")
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name="orders")
    vehicle_type = models.ForeignKey(VehicleType, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)
    slot=models.CharField(null=True, blank=True) # Time slot
    status = models.CharField(
        max_length=20,
        choices=[("initialized", "Initialized"), ("pending", "Pending"), ("completed", "Completed"), ("canceled", "Canceled")],
        default="initialized"
    )
    payment_intent_id = models.CharField(max_length=255, null=True, blank=True)  # New field
    paid = models.BooleanField(default=False)  # ✅ New field
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Order {self.id} by {self.user.username}"
