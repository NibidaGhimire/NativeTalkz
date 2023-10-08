from django.contrib import admin
from .models import Discussionforum


# Register your models here.
@admin.register(Discussionforum)
class DiscussionforumAdmin(admin.ModelAdmin):
    list_display = ["content", "author", "created_at"]
