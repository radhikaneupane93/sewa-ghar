# Generated by Django 5.0.3 on 2024-04-14 03:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_customuser_reward_points'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='reward_points',
        ),
        migrations.AlterField(
            model_name='customuser',
            name='name',
            field=models.CharField(max_length=50),
        ),
    ]