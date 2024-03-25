from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import CustomUserManager

class CustomUser(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Admin"
        DONOR = "DONOR", "Donor"
        CLOTHBANKADMIN = "CLOTHBANKADMIN", "Clothbankadmin"

    username= None
    first_name=None
    last_name=None
   
    email = models.EmailField(unique=True)
    name  = models.CharField(max_length=40) 
    address = models.CharField(max_length=20)
    phonenumber = models.CharField(max_length=20, null=True, blank=True)
    role = models.CharField(max_length=20, choices=Role.choices, default=Role.DONOR)

    USERNAME_FIELD="email"
    REQUIRED_FIELDS=[]

    objects= CustomUserManager()

    def __str__(self):
        return self.email
