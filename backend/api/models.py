from django.db import models

class Customer(models.Model):
    fio = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.fio

class Employee(models.Model):
    fio = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    birth_day = models.DateField()
    role = models.CharField(max_length=30)
    hire_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.fio


class Product(models.Model):
    name = models.CharField(max_length=50)
    amount = models.IntegerField()

    def __str__(self):
        return self.name

class Order(models.Model):
    customer_id = models.ForeignKey('Customer', on_delete=models.CASCADE)
    employee_id = models.ForeignKey('Employee', on_delete=models.CASCADE)
    summ = models.IntegerField()
    create_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.create_date