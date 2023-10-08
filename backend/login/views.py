from django.shortcuts import render
from .models import Login
from .serializers import LoginSerializer
from rest_framework.generics import ListAPIView


# Create your views here.
class LoginList(ListAPIView):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer
