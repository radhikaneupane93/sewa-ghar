from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DonationViewSet, DonationListView, ClothBankViewSet, get_cloth_types, get_cloth_banks, populate_clothBank, verify_donation,get_all_clothbanks

router = DefaultRouter()
router.register(r'donations', DonationViewSet)
router.register(r'clothbanks', ClothBankViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('clothtypes/', get_cloth_types, name='get_cloth_types'),
    path('getclothbanks/', get_cloth_banks, name='get_cloth_banks'),
    path('getallclothbanks/', get_all_clothbanks, name= "get_all_clothbanks"),
    path('addclothbanks/', populate_clothBank, name='add_cloth_banks'),
    path('verify-donation/', verify_donation, name='verify_donation'),
    path('alldonations/', DonationListView.as_view(), name='donation-list'),
     path('create-donation/', DonationViewSet.as_view({'post': 'create_donation'}), name='create_donation'),
]
