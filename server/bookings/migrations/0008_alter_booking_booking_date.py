# Generated by Django 5.1.5 on 2025-05-24 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookings', '0007_rename_order_date_booking_booking_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='booking_date',
            field=models.CharField(),
        ),
    ]
