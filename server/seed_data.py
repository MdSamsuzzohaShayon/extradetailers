import os
import django
from datetime import timedelta

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')  # Change if your settings module is different
django.setup()

from django.contrib.auth import get_user_model
from services.models import Service  # Replace with correct app name

# Function to delete the existing superuser and services
def delete_existing_data():


    User = get_user_model()

    email = "mdsamsuzzoha5222@gmail.com"

    # Delete existing superuser
    existing_user = User.objects.filter(username=email).first()
    if existing_user:
        existing_user.delete()
        print(f"Deleted previous superuser: {email}")
    else:
        print(f"No superuser found with email {email}.")

    # Delete all existing services
    deleted_count, _ = Service.objects.all().delete()
    print(f"Deleted {deleted_count} services.")

def run():
    # Uncomment the next line to delete data before running the rest of the operations
    # delete_existing_data()
    User = get_user_model()

    email = "mdsamsuzzoha5222@gmail.com"
    if not User.objects.filter(username=email).exists():
        user = User.objects.create_superuser(
            username=email,
            email=email,
            password='Test1234',
            first_name="Md",
            last_name="Shayon"
        )
        user.is_active = True
        user.is_validated = True
        user.role = "admin"
        user.save()
        print(f"Superuser {email} created.")
    else:
        print(f"Superuser {email} already exists.")

    services_data = [
        {
            "title": "Ceramic Coat Windshield",
            "price": 100,
            "duration": timedelta(hours=1),
            "description": "Coat windshield to have better visibility while driving in the rain"
        },
        {
            "title": "Platinum Sedan Package",
            "price": 249,
            "duration": timedelta(hours=3.5),
            "description": "Package Includes: Comprehensive interior cleaning, including vacuuming, dashboard treatment, and carpet cleaning Complete exterior detailing with hand wash & wax Tire and rim detailing. Window cleaning inside and out"
        },
        {
            "title": "Motor Home/ RV/ Tractors ($20-35/sqft)",
            "price": 20,
            "duration": timedelta(hours=1),
            "description": "Services Include Steam Wash / Polish / Wax / Oxidation Removal / RV Interior Priced upon inspection"
        },
    ]

    for data in services_data:
        if not Service.objects.filter(title=data["title"]).exists():
            Service.objects.create(**data)
            print(f'Service "{data["title"]}" created.')
        else:
            print(f'Service "{data["title"]}" already exists.')

if __name__ == '__main__':
    run()


# python seed_data.py


