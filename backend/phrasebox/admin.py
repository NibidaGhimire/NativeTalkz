from django.contrib import admin
from .models import Phrasebox


# Register your models here.
@admin.register(Phrasebox)
class PhraseboxAdmin(admin.ModelAdmin):
    list_display = ["id", "phrase", "translation", "audio_file"]
