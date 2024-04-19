from rest_framework import serializers
from .models import Donation, ClothBank
from users.serializers import CustomUserSerializer

class DonationSerializer(serializers.ModelSerializer):
    donated_by = CustomUserSerializer(read_only=True)
    class Meta:
        model = Donation
        fields = '__all__'


class ClothBankSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClothBank
        fields = '__all__'


class ClothBankDonationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClothBank
        fields = ['id', 'title']