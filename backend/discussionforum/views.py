from django.shortcuts import render, redirect
from rest_framework.generics import ListCreateAPIView
from .models import Discussionforum
from .serializers import DiscussionforumSerializer
from rest_framework import status
from rest_framework.response import Response


class DiscussionforumList(ListCreateAPIView):
    queryset = Discussionforum.objects.all()
    serializer_class = DiscussionforumSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
