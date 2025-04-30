from django.urls import path
from .views import (
    ServiceListView, ServiceCreateView, ServiceRetrieveView, ServiceUpdateView, ServiceDeleteView,
    ServiceCategoryListView, ServiceCategoryCreateView, ServiceCategoryRetrieveView,
    ServiceCategoryUpdateView, ServiceCategoryDeleteView,
    VehicleTypeListView, VehicleTypeCreateView, VehicleTypeRetrieveView,
    VehicleTypeUpdateView, VehicleTypeDeleteView,
    ServicePriceListView, ServicePriceCreateView, ServicePriceRetrieveView,
    ServicePriceUpdateView, ServicePriceDeleteView,
    ServiceFeatureListView, ServiceFeatureCreateView, ServiceFeatureRetrieveView,
    ServiceFeatureUpdateView, ServiceFeatureDeleteView,
    AddOnServiceListView, AddOnServiceCreateView, AddOnServiceRetrieveView,
    AddOnServiceUpdateView, AddOnServiceDeleteView, FullDataView
)

urlpatterns = [
    # Service URLs
    path('services/', ServiceListView.as_view()),
    path('services/create/', ServiceCreateView.as_view()),
    path('services/<int:pk>/', ServiceRetrieveView.as_view()),
    path('services/<int:pk>/update/', ServiceUpdateView.as_view()),
    path('services/<int:pk>/delete/', ServiceDeleteView.as_view()),

    # ServiceCategory URLs
    path('service-categories/', ServiceCategoryListView.as_view()),
    path('service-categories/create/', ServiceCategoryCreateView.as_view()),
    path('service-categories/<int:pk>/', ServiceCategoryRetrieveView.as_view()),
    path('service-categories/<int:pk>/update/', ServiceCategoryUpdateView.as_view()),
    path('service-categories/<int:pk>/delete/', ServiceCategoryDeleteView.as_view()),

    # VehicleType URLs
    path('vehicle-types/', VehicleTypeListView.as_view()),
    path('vehicle-types/create/', VehicleTypeCreateView.as_view()),
    path('vehicle-types/<int:pk>/', VehicleTypeRetrieveView.as_view()),
    path('vehicle-types/<int:pk>/update/', VehicleTypeUpdateView.as_view()),
    path('vehicle-types/<int:pk>/delete/', VehicleTypeDeleteView.as_view()),

    # ServicePrice URLs
    path('service-prices/', ServicePriceListView.as_view()),
    path('service-prices/create/', ServicePriceCreateView.as_view()),
    path('service-prices/<int:pk>/', ServicePriceRetrieveView.as_view()),
    path('service-prices/<int:pk>/update/', ServicePriceUpdateView.as_view()),
    path('service-prices/<int:pk>/delete/', ServicePriceDeleteView.as_view()),

    # ServiceFeature URLs
    path('service-features/', ServiceFeatureListView.as_view()),
    path('service-features/create/', ServiceFeatureCreateView.as_view()),
    path('service-features/<int:pk>/', ServiceFeatureRetrieveView.as_view()),
    path('service-features/<int:pk>/update/', ServiceFeatureUpdateView.as_view()),
    path('service-features/<int:pk>/delete/', ServiceFeatureDeleteView.as_view()),

    # AddOnService URLs
    path('addon-services/', AddOnServiceListView.as_view()),
    path('addon-services/create/', AddOnServiceCreateView.as_view()),
    path('addon-services/<int:pk>/', AddOnServiceRetrieveView.as_view()),
    path('addon-services/<int:pk>/update/', AddOnServiceUpdateView.as_view()),
    path('addon-services/<int:pk>/delete/', AddOnServiceDeleteView.as_view()),

    path('services/full-data/', FullDataView.as_view()),

]