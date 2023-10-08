from django.shortcuts import render
from .models import Phrasebox
from .serializers import PhraseboxSerializer
from rest_framework.generics import ListAPIView


# Create your views here.
class PhraseboxList(ListAPIView):
    queryset = Phrasebox.objects.all()
    serializer_class = PhraseboxSerializer
