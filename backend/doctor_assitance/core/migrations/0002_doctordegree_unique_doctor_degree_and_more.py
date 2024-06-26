# Generated by Django 5.0.6 on 2024-05-14 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddConstraint(
            model_name='doctordegree',
            constraint=models.UniqueConstraint(fields=('doctor', 'degree'), name='unique_doctor_degree'),
        ),
        migrations.AddConstraint(
            model_name='doctorspecialization',
            constraint=models.UniqueConstraint(fields=('doctor', 'specialization'), name='unique_doctor_specialization'),
        ),
    ]
