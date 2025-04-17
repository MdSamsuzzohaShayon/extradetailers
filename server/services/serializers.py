from rest_framework import serializers
from .models import Service


class ServiceSerializer(serializers.ModelSerializer):
    price = serializers.FloatField()  # override price as float
    class Meta:
        model = Service
        fields = "__all__"
