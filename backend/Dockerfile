FROM python:latest

WORKDIR /var/django

COPY ./ ./

RUN pip install -r requirements.txt
RUN pip install django-cors-headers