# Generated by Django 5.0.3 on 2024-04-05 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_remove_customuser_first_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='reward_points',
            field=models.IntegerField(default=1),
        ),
    ]
