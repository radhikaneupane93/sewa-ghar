# Generated by Django 5.0.3 on 2024-04-28 11:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('donation', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clothbank',
            name='admin_user',
        ),
    ]
