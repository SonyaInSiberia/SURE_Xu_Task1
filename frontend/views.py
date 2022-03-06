from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')

def task1(request):
    return render(request, 'frontend/tasks.html')
# Create your views here.
