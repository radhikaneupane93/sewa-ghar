from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/',include('users.urls')),
    path('donation/',include('donation.urls')),
    path('requestform/',include('requestform.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
]
