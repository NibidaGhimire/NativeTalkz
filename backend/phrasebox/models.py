# api/models.py
from django.db import models


class Phrasebox(models.Model):
    id = models.AutoField(primary_key=True)
    phrase = models.CharField(max_length=255)
    translation = models.CharField(
        max_length=255, default=""
    )  # Set your desired default value here
    audio_file = models.FileField(upload_to="audio/", default="default_audio_file.mp3")

    def __str__(self):
        return self.phrase
