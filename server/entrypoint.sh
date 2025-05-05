#!/bin/bash
set -e

python manage.py makemigrations --noinput
python manage.py migrate --noinput
python manage.py collectstatic --noinput

exec "$@"


# Start the Django application
# exec gunicorn server.wsgi:application --bind 0.0.0.0:8000 --workers 3
