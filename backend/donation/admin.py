from django.contrib import admin
from .models import Donation

class DonationAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'gender', 'clothtype', 'bankLocation')
    search_fields = ('name', 'email', 'clothtype')
    list_filter = ('gender', 'bankLocation')

admin.site.register(Donation, DonationAdmin)
