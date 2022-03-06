from django.shortcuts import render
from .models import Annotations
from icecream import ic
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import AnnotSerializer

def page_view(request):
    return render(request, 'page.html')

def annotations_view(request):
    context = {
        'annotations': Annotations.objects.all(),
    }
    ic('context:', context)
    return render(request, 'task1/annotations.html', context)

class AnnotationView(APIView):
    serializer_class = AnnotSerializer
    def get(self, request):
        context = [{'id': annotation.id, 'selected_text': annotation.selected_text, 'annotation': annotation.annotation,
                    'date_time': annotation.date_time}for annotation in Annotations.objects.all()]
        return Response(context)

    def post(self, request):
        serializer = AnnotSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
