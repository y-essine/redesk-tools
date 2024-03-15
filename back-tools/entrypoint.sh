#!/bin/sh
python manage.py makemigrations app
python manage.py migrate


exec "$@"