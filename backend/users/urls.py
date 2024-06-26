#urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomUserViewSet, LoginViewSet, UpdateProfileView, UserView, change_password, get_specific_user, LeaderboardView, delete_user


router = DefaultRouter()
router.register(r'customuser', CustomUserViewSet, basename='customuser')

app_name = "users"
urlpatterns = [
    path('api/', include(router.urls)),
    path('api/login/', LoginViewSet.as_view({'post': 'create'}), name='login'),
    path('api/user/', UserView.as_view() , name='user'),
    path('api/user/<int:user_id>', get_specific_user , name='user'),
    path('api/leaderboard/', LeaderboardView.as_view(), name='leaderboard-api'),
    path('change_password/', change_password, name='change_password'),
    path('delete-user/', delete_user, name='delete_user'),
    path('api/update-profile/', UpdateProfileView.as_view(), name='update-profile'),
]