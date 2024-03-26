from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class BankLocation(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    latitude = models.FloatField(validators=[MinValueValidator(-90), MaxValueValidator(90)])
    longitude = models.FloatField(validators=[MinValueValidator(-180), MaxValueValidator(180)])
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    
    def __str__(self):
        return self.title
