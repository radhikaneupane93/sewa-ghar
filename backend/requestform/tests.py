from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse

from .models import Request

class RequestFormViewTestCase(TestCase):
    def test_valid_data(self):
        client = APIClient()
        data = {
            'name': 'John',
            'email': 'john@example.com',
            'phonenumber': '1234567890',
            'message': 'Valid message'
        }
        response = client.post(reverse('request-form'), data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_invalid_data(self):
        client = APIClient()
        data = {
            'name': 'Invalid Name',
            'email': 'invalid_email',  
            'phonenumber': 'invalid_phone_number', 
            'message': 'Invalid message'
        }
        response = client.post(reverse('request-form'), data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
