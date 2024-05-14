"""
Database Models
"""

from django.db import models
from django.conf import settings
from django.core.validators import RegexValidator, MinValueValidator, MaxValueValidator
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)


class UserManager(BaseUserManager):
    """Manager for user model"""

    def create_user(self, phone, is_doctor, password=None, **extra_fields):
        if not phone:
            raise ValueError("Phone number is required.")

        user = self.model(phone=phone, is_doctor=is_doctor, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        if is_doctor:
            Doctor.objects.create(user=user)
        else:
            Patient.objects.create(user=user)

        return user

    def create_superuser(self, phone, password):
        user = self.create_user(phone, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """User in the system."""

    phone_regex = RegexValidator(
        regex=r"^\+?\d{9,19}$",
        message="Phone number must be entered in the format: '999999999'. Up to 15 digits allowed.",
    )

    phone = models.CharField(max_length=20, unique=True, validators=[phone_regex])
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_doctor = models.BooleanField(default=False, null=False)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    """ The field we want to use for authentication """
    USERNAME_FIELD = "phone"


class Doctor(models.Model):
    """Doctor model."""

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    experience = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(99)]
    )
    date_of_birth = models.DateField(
        null=True,
    )


class Degree(models.Model):
    """Degree model."""

    degree_name = models.CharField(max_length=100)
    doctors = models.ManyToManyField("Doctor", through="DoctorDegree")


class Specialization(models.Model):
    """Specialization model."""

    specialization_name = models.CharField(max_length=100)
    doctors = models.ManyToManyField("Doctor", through="DoctorSpecialization")


class DoctorDegree(models.Model):
    """Junction table between Doctor and Degree."""

    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    degree = models.ForeignKey(Degree, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["doctor", "degree"], name="unique_doctor_degree"
            )
        ]


class DoctorSpecialization(models.Model):
    """Junction table between Doctor and Specialization."""

    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    specialization = models.ForeignKey(Specialization, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["doctor", "specialization"], name="unique_doctor_specialization"
            )
        ]


class Patient(models.Model):
    """Patient model."""

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        primary_key=True,
    )
