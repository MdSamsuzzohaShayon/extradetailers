# 🚀 Extradetailers Django Deployment Guide (Clean Version)

A concise, step-by-step guide for setting up and deploying the **Extradetailers** Django application on a Linux server.

---

## 1. Prepare Project & Install Dependencies

```bash
# Navigate to project
cd extradetailers/server/

# Remove old environment and database files
rm -rf .env db.sqlite3
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
find . -path "*/migrations/*.pyc" -delete

# Install Python dependencies
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

**Explanation:**

* Cleans old database and migrations to avoid conflicts.
* Creates a virtual environment for isolated dependencies.
* Installs all Python packages required for the project.

---

## 2. Configure Django Project

```bash
# Create migrations and migrate database
python manage.py makemigrations
python manage.py migrate

# Create or edit environment file
nano .env

# Run Django server locally (test)
python manage.py runserver
```

**Explanation:**

* `makemigrations` and `migrate` prepare the database schema.
* `.env` stores sensitive settings like secret keys and database credentials.
* Running the server locally ensures the project is working.

---

## 3. Production Setup with Gunicorn

```bash
# Run Django app with Gunicorn (production-ready)
gunicorn core.wsgi:application --bind 127.0.0.1:8000
```

**Explanation:**

* Gunicorn is a WSGI server that runs Django in production mode.
* Binds the app to localhost (`127.0.0.1`) for Nginx to proxy requests.

---

## 4. Install & Configure Nginx

```bash
# Install Nginx and allow traffic
sudo apt install nginx -y
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable

# Configure Nginx for your project
sudo nano /etc/nginx/sites-available/extradetailers
sudo ln -s /etc/nginx/sites-available/extradetailers /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

**Explanation:**

* Nginx acts as a reverse proxy for Gunicorn and serves static files.
* UFW rules allow SSH and HTTP/HTTPS traffic.
* Linking sites-available → sites-enabled activates the site configuration.

---

## 5. Secure Site with SSL (Certbot)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d extradetailers.webdevlab.org
sudo certbot renew --dry-run
```

**Explanation:**

* Certbot automatically configures HTTPS for your Nginx site.
* `renew --dry-run` tests automatic certificate renewal.

---

## 6. Setup Systemd Service

```bash
# Create service file
sudo nano /etc/systemd/system/extradetailers.service

# Reload systemd to recognize new service
sudo systemctl daemon-reload

# Start and enable Django service
sudo systemctl start extradetailers
sudo systemctl enable extradetailers

# Check logs
sudo journalctl -u extradetailers -f
```

**Explanation:**

* Runs Django app as a background service.
* Ensures the app starts automatically on server boot.
* Logs help monitor and debug issues in real-time.

---

## 7. Test the Deployment

```bash
curl http://127.0.0.1:8000/api
curl https://extradetailers.webdevlab.org/api
curl https://extradetailers.webdevlab.org/api/docs/
```

**Explanation:**

* Verify local and live API endpoints.
* Ensure HTTPS and API documentation are working correctly.

---

✅ **Clean Deployment Notes**

1. Only essential steps are included for **database, dependencies, server, SSL, and service management**.
2. Virtual environment isolation ensures **Python packages do not conflict** with system packages.
3. Nginx + Gunicorn + Systemd setup makes your Django app **production-ready**.
4. SSL ensures your site is **secure** with HTTPS.

---
