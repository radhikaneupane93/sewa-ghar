from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BankLocationViewSet

router = DefaultRouter()
router.register(r'bank-locations', BankLocationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
