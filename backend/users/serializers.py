#serializers.py
from rest_framework import serializers
from .models import CustomUser
from django.core.validators import validate_email
import django.contrib.auth.password_validation as validators
from django.core.exceptions import ValidationError

class CustomUserSerializer(serializers.ModelSerializer):
    address = serializers.CharField(required=False)
    phonenumber = serializers.CharField(required=False)
    points = serializers.IntegerField(required=False)

    class Meta:
        model = CustomUser
        fields = ['id', 'name', 'email', 'password', 'role', 'address', 'phonenumber', 'points']
        extra_kwargs = {
            'password': {'write_only':True}
        }

    def validate(self, data):
        email = data.get('email')
        try:
            validate_email(email)
            
        except ValidationError:
            raise serializers.ValidationError("Invalid email format")
        
        return data

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user
    
    
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()    
    password = serializers.CharField(write_only=True)
    
    
class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

class ResetPasswordEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)

class LeaderBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['name', 'address', 'points']

class UpdateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['name', 'address', 'phonenumber']

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.address = validated_data.get('address', instance.address)
        instance.phonenumber = validated_data.get('phonenumber', instance.phonenumber)
        instance.save()
        return instance
        
class DeleteUserSerializer(serializers.Serializer):
    pass
