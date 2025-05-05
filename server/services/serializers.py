from rest_framework import serializers
from .models import ServiceCategory, VehicleType, Service, ServicePrice, ServiceFeature, AddOnService


class VehicleTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleType
        fields = '__all__'


class ServiceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceCategory
        fields = '__all__'


class ServicePriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicePrice
        fields = '__all__'


class ServiceFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceFeature
        fields = '__all__'


class AddOnServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddOnService
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    prices = ServicePriceSerializer(many=True, read_only=True)
    features = ServiceFeatureSerializer(many=True, read_only=True)
    category = ServiceCategorySerializer(read_only=True)

    class Meta:
        model = Service
        fields = '__all__'


class FullDataSerializer(serializers.Serializer):
    services = ServiceSerializer(many=True)
    vehicle_types = VehicleTypeSerializer(many=True)
    service_categories = ServiceCategorySerializer(many=True)
    service_prices = ServicePriceSerializer(many=True)
    service_features = ServiceFeatureSerializer(many=True)
    addon_services = AddOnServiceSerializer(many=True)