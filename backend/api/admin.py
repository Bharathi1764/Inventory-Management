from django.contrib import admin
from .models import User, Product
from backend.custom_admin import custom_admin_site

custom_admin_site.register(User)
custom_admin_site.register(Product)