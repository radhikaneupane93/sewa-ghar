from rest_framework import serializers
from .models import Donation, ClothBank
from users.serializers import CustomUserSerializer

class ClothBankSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClothBank
        fields = '__all__'

class DonationSerializer(serializers.ModelSerializer):
    donated_by = CustomUserSerializer(read_only=True)
    class Meta:
        model = Donation
        fields = '__all__'

class DonationViewSerializer(serializers.ModelSerializer):
    donated_by = CustomUserSerializer(read_only=True)
    cloth_bank = ClothBankSerializer()
    class Meta:
        model = Donation
        fields = '__all__'


class ClothBankDonationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClothBank
        fields = ['id', 'title']


class DonationVerificationSerializer(serializers.Serializer):
    donation_id = serializers.IntegerField()
    status = serializers.ChoiceField(choices=['Accepted', 'Rejected'])

    def validate(self, data):
        donation_id = data.get('donation_id')

        try:
            donation = Donation.objects.get(pk=donation_id)
        except Donation.DoesNotExist:
            raise serializers.ValidationError("Donation not found")

        return data