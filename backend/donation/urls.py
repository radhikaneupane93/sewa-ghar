from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DonationViewSet, ClothBankViewSet,get_cloth_types,get_cloth_banks,populate_clothBank

router = DefaultRouter()
router.register(r'donations', DonationViewSet)
router.register(r'clothbanks', ClothBankViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('clothtypes/', get_cloth_types, name='get_cloth_types'),
    path('getclothbanks/', get_cloth_banks,name='get_cloth_banks'),
    path('addclothbank/',populate_clothBank)
]