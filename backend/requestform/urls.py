from django.urls import path
from . import views

urlpatterns = [
    path('request-form/', views.RequestFormView.as_view(), name='request-form'),
]

