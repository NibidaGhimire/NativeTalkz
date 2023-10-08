from rest_framework import serializers
from .models import Phrasebox


class PhraseboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phrasebox
        fields = ["phrase", "translation", "audio_file"]
