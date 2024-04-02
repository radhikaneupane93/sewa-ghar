from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import SignUpSerializer


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    
class SignUpView(APIView):
    serializer_class = SignUpSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            password = serializer.validated_data['password']
            return Response({'message': 'Sign Up Successful'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


