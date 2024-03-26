from django.contrib import admin
from .models import BankLocation

@admin.register(BankLocation)
class BankLocationAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'latitude', 'longitude', 'address', 'city', 'country', 'phone_number')
    search_fields = ('title', 'description', 'address', 'city', 'country', 'phone_number')
