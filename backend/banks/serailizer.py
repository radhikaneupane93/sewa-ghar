from rest_framework import serializers
from .models import BankLocation

class BankLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model= BankLocation
        fields = ['title','description','latitude','longitude','address','city','country','phone_number']
        
  
        
        
        
        