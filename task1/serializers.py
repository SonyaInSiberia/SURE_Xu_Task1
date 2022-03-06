from rest_framework import serializers
from .models import Annotations

class AnnotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annotations
        fields = ('selected_text', 'annotation', 'date_time')

