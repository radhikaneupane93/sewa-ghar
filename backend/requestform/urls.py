from django.urls import path
from .views import RequestFormView

urlpatterns = [
    path('request-form/', RequestFormView.as_view(), name='request-form'),
]
