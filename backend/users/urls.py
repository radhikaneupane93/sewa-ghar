from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SignUpView

router = DefaultRouter()
router.register(r'registration', SignUpView)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls')),
]
