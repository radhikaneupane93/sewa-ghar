from .models import CustomUser
from rest_framework import serializers

class CustomUserSerilizer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'name', 'password','address','phonenumber',]
        extra_kwargs = {
            'password': {'write_only':True}
        }
    def create(self, validated_data):
        if (validated_data):
            user=CustomUser.objects.create_user(**validated_data)
        return user 

class LoginSerilizer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only ="True")
    
