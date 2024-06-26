# Generated by Django 5.0.3 on 2024-04-28 09:41

import django.core.validators
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ClothBank',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=255)),
                ('latitude', models.FloatField(validators=[django.core.validators.MinValueValidator(-90), django.core.validators.MaxValueValidator(90)])),
                ('longitude', models.FloatField(validators=[django.core.validators.MinValueValidator(-180), django.core.validators.MaxValueValidator(180)])),
                ('address', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=100)),
                ('phone_number', models.CharField(max_length=20)),
                ('map_url', models.CharField(max_length=512)),
                ('admin_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Donation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cloth_type', models.CharField(choices=[('SHIRT', 'Shirt'), ('TROUSERS', 'Trousers'), ('DRESS', 'Dress'), ('COAT', 'Coat'), ('SWEATER', 'Sweater'), ('SKIRT', 'Skirt'), ('OTHER', 'Other')], default='Shirt', max_length=20)),
                ('no_of_clothes', models.IntegerField(default=0)),
                ('donation_date', models.DateField(auto_now_add=True)),
                ('status', models.CharField(default='Pending', max_length=25)),
                ('cloth_bank', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cloth_bank', to='donation.clothbank')),
                ('donated_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='donated_by', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
