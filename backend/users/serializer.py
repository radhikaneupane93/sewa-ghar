from django.core.exceptions import ValidationError
from rest_framework import serializers

class SignUpSerializer(serializers.Serializer):
    password = serializers.CharField(min_length=8, write_only=True)
    confirm_password = serializers.CharField(min_length=8, write_only=True)

    def validate(self, data):
        if data.get('password') != data.get('confirm_password'):
            raise ValidationError("The passwords do not match.")
        return data
