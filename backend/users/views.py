#views.py
from rest_framework import viewsets, status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from rest_framework.decorators import api_view, permission_classes
from .models import CustomUser
from .serializers import ChangePasswordSerializer, CustomUserSerializer, LoginSerializer, LeaderBoardSerializer, UpdateProfileSerializer
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth import authenticate

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    def create(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
                
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class UpdateProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        serializer = UpdateProfileSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Profile updated successfully"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class LoginViewSet(viewsets.ViewSet):
    serializer_class = LoginSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data['email']
        password = serializer.validated_data['password']

        user = authenticate(request, email=email, password=password)

        if user is None:
            response_data = {
                'message': "Invalid email or password",
            }
            return Response(response_data, status=status.HTTP_401_UNAUTHORIZED)

        refresh = RefreshToken.for_user(user)
        access_token = refresh.access_token

        response_data = {
            'refresh': str(refresh),
            'access': str(access_token),
        }

        return Response(response_data, status=status.HTTP_200_OK)


class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        access_token = request.headers.get('Authorization').split()[1]
        print(access_token)

        if not access_token:
            raise AuthenticationFailed('User not authenticated!')

        try:
            user_id = AccessToken(access_token)['user_id']
            user = CustomUser.objects.get(id=user_id)
            serializer = CustomUserSerializer(user)
            return Response(serializer.data)

        except Exception as e:
            return Response({'error': f'Error decoding token: {str(e)}'}, status=status.HTTP_401)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    if request.method == 'POST':
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            user = request.user
            if user.check_password(serializer.data.get('old_password')):
                user.set_password(serializer.data.get('new_password'))
                user.save()
                update_session_auth_hash(request, user)  # To update session after password change
                return Response({'message': 'Password changed successfully.'}, status=status.HTTP_200_OK)
            return Response({'error': 'Incorrect old password.'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_specific_user(request, user_id):
    if request.method == 'GET':
        user = CustomUser.objects.filter(id=user_id)
        if user:
            serializer = CustomUserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'User not found or unauthorized access'}, status=status.HTTP_404_NOT_FOUND)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_user(request):
    user = request.user
    user.delete()
    return Response({'message': 'User account deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
    
    
class LeaderboardView(APIView):
    def get(self, request):
        users = CustomUser.objects.order_by('-points')[:5]
        serializer = LeaderBoardSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    