from django.db import models
from users.models import CustomUser

class Leaderboard(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    reward_points = models.IntegerField(default=0) 
    # To store points 

    def __str__(self):
        return f"{self.user.email} - Reward Points: {self.reward_points}"
