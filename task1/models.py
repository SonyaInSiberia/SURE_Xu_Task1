from django.db import models
from django.utils import timezone

class Annotations(models.Model):
    selected_text = models.CharField(max_length=64, default='DEFAULT')
    annotation = models.CharField(max_length=64, default='DEFAULT')
    date_time = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.annotation

# Create your models here.
