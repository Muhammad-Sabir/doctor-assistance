from django.db import models

# Create your models here.
# class User(models.Model):
#     ACCOUNT_TYPES = [
#         ('doctor', 'doctor'),
#         ('patient', 'patient'),
#     ]

#     name = models.CharField(max_length=255)
#     email = models.EmailField(max_length=255, unique=True)
#     phone = models.CharField(max_length=11, unique=True)
#     password = models.CharField(max_length=255)
#     account_type = models.CharField(max_length=7, choices=ACCOUNT_TYPES, default='patient')
#     is_authenticated = models.BooleanField(default=False)

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=100)
    is_authenticated = models.BooleanField(default=False)
    account_type = models.CharField(max_length=20)