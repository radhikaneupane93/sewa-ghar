from django.shortcuts import render
# Viewsets provide methods for CRUD operations
from rest_framework import viewsets,status
from .models import CustomUser
from .serailizer import CustomUserSerilizer,LoginSerilizer
from rest_framework.response import Response
from .serailizer import LoginSerilizer
from django.contrib.auth import authenticate
# from rest_framework.exceptions import AuthenticationFailed
# from django.http import HttpResponse
# from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
# from allauth.socialaccount.providers.oauth2.client import OAuth2Client
# from dj_rest_auth.registration.views import SocialLoginView

#Create your views here.
class CustomUserViewSet(viewsets.ModelViewSet):
    queryset= CustomUser.objects.all()
    serializer_class= CustomUserSerilizer

    def create (self,request):
        serailizer= self.serializer_class(data=request.data)
        if serailizer.is_valid():
            serailizer.save() 
            return Response(serailizer.data,status=status.HTTP_201_CREATED)
        return Response(serailizer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class LoginViewSet(viewsets.ViewSet):
    serializer_class= LoginSerilizer
    def create (self,request):
        serailizer= self.serializer_class(data=request.data)

        if serailizer.is_valid():
            email=serailizer.validated_data['email']
            password=serailizer.validated_data['password']

            user=authenticate(request,email=email,password=password)
            if user is None:
                raise AuthenticationFailed("Invalid Email or Password")
            return Response(serailizer.data,status=status.HTTP_201_CREATED)
        return Response(serailizer.errors,status=status.HTTP_400_BAD_REQUEST)
    
# class GoogleLogin(SocialLoginView): # if you want to use Authorization Code Grant, use this
#     adapter_class = GoogleOAuth2Adapter
#     callback_url = "http://127.0.0.1:3000"
#     client_class = OAuth2Client

# class GoogleLogin(SocialLoginView): # if you want to use Implicit Grant, use this
#     adapter_class = GoogleOAuth2Adapter

    
           
    
    
