from django.db import models

class Donation(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]

    LOCATION_CHOICES = [
        ('Upcycle Nepal - Revive, Chittadhar Marg, Bangemuddha, Kathmandu 44600', 'Upcycle Nepal - Revive, Chittadhar Marg, Bangemuddha, Kathmandu 44600'),
        ('Public Cloth bank, M8HJ+QR4, Unnamed Road, Kathmandu 44600', 'Public Cloth bank, M8HJ+QR4, Unnamed Road, Kathmandu 44600'),
        ('Clothes Bank Sherpa (Thrift Clothes Shop), P9CC+548, Gokarneshwor 44600', 'Clothes Bank Sherpa (Thrift Clothes Shop), P9CC+548, Gokarneshwor 44600'),
        ('Sukhawati Charity Store, Kathmandu 44600', 'Sukhawati Charity Store, Kathmandu 44600'),
        ('Sukhawati Store, P7CR+GWJ, Kathmandu 44600', 'Sukhawati Store, P7CR+GWJ, Kathmandu 44600'),
        ('Action Works Nepal, Kathmandu 44600', 'Action Works Nepal, Kathmandu 44600'),
        ('Aroan Nepal - KC Complex, Second Floor, Kathmandu 44600', 'Aroan Nepal - KC Complex, Second Floor, Kathmandu 44600'),
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    clothtype = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255, choices=LOCATION_CHOICES)

    def __str__(self):
        return self.name
