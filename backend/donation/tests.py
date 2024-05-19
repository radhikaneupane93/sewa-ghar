from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import Donation, ClothBank
from users.models import CustomUser

class DonationTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = CustomUser.objects.create_user(email='admin@example.com', password='testpassword', name='Admin User', 
                                                   role=CustomUser.Role.CLOTHBANKADMIN)
        self.cloth_bank = ClothBank.objects.create(
            title='Test Cloth Bank',
            description='Test Description',
            latitude=0.0,
            longitude=0.0,
            address='Test Address',
            city='Test City',
            phone_number='1234567890'
        )

    def test_create_donation(self):
        self.client.force_authenticate(user=self.user)
        data = {
            'cloth_type': 'SHIRT',
            'cloth_bank': self.cloth_bank.id,
            'no_of_clothes': 5,
        }
        response = self.client.post(reverse('create_donation'), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Donation.objects.count(), 1)
        self.assertEqual(Donation.objects.get().donated_by, self.user)

    def test_verify_donation(self):
        self.client.force_authenticate(user=self.user)
        donation = Donation.objects.create(donated_by=self.user, cloth_type='Shirt', cloth_bank=self.cloth_bank, no_of_clothes=5)
        data = {
            'donation_id': donation.id,
            'status': 'Accepted',
        }
        response = self.client.post(reverse('verify_donation'), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Donation.objects.get().status, 'Accepted')

    def test_get_cloth_types(self):
        response = self.client.get(reverse('get_cloth_types'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), len(Donation.CLOTH_CHOICES))

    def test_get_cloth_banks(self):
        response = self.client.get(reverse('get_cloth_banks'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), ClothBank.objects.count())
