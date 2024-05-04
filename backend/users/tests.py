from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.contrib.auth import get_user_model
from .models import CustomUser
from .serializers import CustomUserSerializer, LoginSerializer

class UsersAppTest(TestCase):

    def setUp(self):
        self.client = APIClient()
        self.user_data = {
            "name": "Test User",
            "email": "test@example.com",
            "password": "strongpassword",
            "role": "DONOR"
        }

    def test_user_creation(self):
        data = self.user_data.copy()
        response = self.client.post('/api/customuser/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        created_user = CustomUser.objects.get(email=data['email'])
        self.assertEqual(created_user.name, data['name'])
        self.assertEqual(created_user.role, data['role'])

    def test_user_creation_missing_fields(self):
        data = self.user_data.copy()
        del data['name']
        response = self.client.post('/api/customuser/', data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_user_login(self):
        user = get_user_model().objects.create_user(**self.user_data)
        login_data = {
            "email": user.email,
            "password": self.user_data['password']
        }
        serializer = LoginSerializer(data=login_data)
        serializer.is_valid(raise_exception=True)

        response = self.client.post('/api/login/', login_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('refresh', response.data)
        self.assertIn('access', response.data)

    def test_user_login_invalid_credentials(self):
        login_data = {
            "email": "invalid@example.com",
            "password": "wrongpassword"
        }
        response = self.client.post('/api/login/', login_data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertIn('message', response.data)

    def test_get_current_user_authenticated(self):
        user = get_user_model().objects.create_user(**self.user_data)
        self.client.force_authenticate(user=user)
        response = self.client.get('/api/user/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        serializer = CustomUserSerializer(user)
        self.assertEqual(response.data, serializer.data)

    def test_get_current_user_unauthenticated(self):
        response = self.client.get('/api/user/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
