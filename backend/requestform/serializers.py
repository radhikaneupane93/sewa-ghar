from rest_framework import serializers
from .models import Request

class RequestSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=False)
    phonenumber = serializers.CharField(required=False)
    email = serializers.EmailField() 
    message = serializers.CharField(required=False)  # Corrected to CharField
    
    class Meta:
        model = Request
        fields = ['name', 'email', 'phonenumber', 'message']
