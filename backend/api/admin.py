from django.contrib import admin
from .models import Customer, Employee, Product, Order

admin.site.register(Customer)
admin.site.register(Employee)
admin.site.register(Product)
admin.site.register(Order)

