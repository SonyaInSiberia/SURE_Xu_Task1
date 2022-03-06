from django.urls import path, include
from . import views
from rest_framework import routers
from icecream import ic

urlpatterns = [
    path('api/task1/', views.AnnotationView.as_view(), name='task1-api'),
    path('task1/annotation/', views.annotations_view, name='task1-annotation'),
]

