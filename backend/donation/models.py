import datetime
from typing import Any
from django.db import models
from users.models import CustomUser
from django.core.validators import MinValueValidator, MaxValueValidator

class ClothBank(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=255)
    latitude = models.FloatField(validators=[MinValueValidator(-90), MaxValueValidator(90)])
    longitude = models.FloatField(validators=[MinValueValidator(-180), MaxValueValidator(180)])
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    map_url = models.CharField(max_length=512)
    total_numberOfdonations = models.IntegerField(default=0)
    total_numberOfclothes = models.IntegerField(default=0)
    
    def __str__(self):
        return self.title

class Donation(models.Model):
    CLOTH_CHOICES = [
        ('SHIRT', 'Shirt'),
        ('TROUSERS', 'Trousers'),
        ('DRESS', 'Dress'),
        ('COAT', 'Coat'),
        ('SWEATER', 'Sweater'),
        ('SKIRT', 'Skirt'),
        ('OTHER', 'Other'),
    ]
    STATUS_TYPES = ['Pending', 'Accepted', 'Rejected']

    donated_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='donated_by')
    cloth_type = models.CharField(max_length=20, choices=CLOTH_CHOICES, default='Shirt')
    cloth_bank = models.ForeignKey(ClothBank, on_delete=models.CASCADE, related_name='cloth_bank')
    no_of_clothes = models.IntegerField(default=0)
    donation_date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=25, default="Pending")

    def __str__(self):
        return f"Donation by {self.donated_by} of type {self.cloth_type} to {self.cloth_bank}"
    
    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
        
 