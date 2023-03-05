from django.urls import path, re_path as url
from . import views

urlpatterns = [


    path('customer/', views.CustomerListCreate.as_view()),
    path('customer/<int:pk>', views.CustomerRUD.as_view()),

    path('employee/', views.EmployeeListCreate.as_view()),
    path('employee/<int:pk>', views.EmployeeRUD.as_view()),

    path('product/', views.ProductListCreate.as_view()),
    path('product/<int:pk>', views.ProductRUD.as_view()),

    path('order/', views.OrderListCreate.as_view()),
    path('order/<int:pk>', views.OrderRUD.as_view()),
]