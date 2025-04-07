# Create your models here.
from django.db import models


class Service(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.DurationField()  # Duration stored as a timedelta
    description = models.TextField()

    def __str__(self):
        return self.title
