from django.urls import path
from . import views


urlpatterns = [
    path('', views.index),
    path('task1/', views.task1),
]