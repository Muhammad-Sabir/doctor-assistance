"""
Database Models
"""

from django.db import models
from django.core.validators import RegexValidator
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin
)


class UserManager(BaseUserManager):
    """ Manager for user model """

    def create_user(self, phone, password=None, **extra_fields):
        if not phone:
            raise ValueError('Phone number is required.')

        user = self.model(phone=phone, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, phone, password):
        user = self.create_user(phone, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user

class User(AbstractBaseUser, PermissionsMixin):
    """ User in the system. """

    phone_regex = RegexValidator(regex=r'^\+?\d{9,19}$',
        message="Phone number must be entered in the format: '999999999'. Up to 15 digits allowed.")

    phone = models.CharField(max_length=20, unique=True, validators=[phone_regex])
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_doctor = models.BooleanField(default=False)
    is_authenticated = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    """ The field we want to use for authentication """
    USERNAME_FIELD = 'phone'


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

# class User(models.Model):
#     user_id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=100)
#     email = models.EmailField(max_length=100)
#     phone = models.CharField(max_length=20)
#     password = models.CharField(max_length=100)
#     is_authenticated = models.BooleanField(default=False)
#     account_type = models.CharField(max_length=20)