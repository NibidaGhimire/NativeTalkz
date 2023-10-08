from django.contrib import admin
from .models import Login


# Register your models here.
@admin.register(Login)
class StudentAdmin(admin.ModelAdmin):
    list_display = ["id", "username", "password"]
