from django.db import models
from banks.models import BankLocation

class Donation(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]
    name = models.CharField(max_length=255)
    email = models.EmailField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    clothtype = models.CharField(max_length=255)
    description = models.TextField()
    bankLocation = models.ForeignKey(BankLocation, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
