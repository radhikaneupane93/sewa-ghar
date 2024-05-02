from django.db import models

class Request(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phonenumber = models.CharField(max_length=20)
    message = models.TextField()

    def __str__(self):
        return self.name
