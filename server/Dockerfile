FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

copy requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt 

COPY . .

ARG SECRET_KEY
ENV SECRET_KEY=$SECRET_KEY

RUN chmod +x /app/entrypoint.sh

# RUN python seed_data.py
      
# gunicorn server.wsgi:application --bind 0.0.0.0:8000 --workers 3


CMD ["/app/entrypoint.sh", "gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]