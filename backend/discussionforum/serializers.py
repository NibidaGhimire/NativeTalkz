from rest_framework import serializers
from .models import Discussionforum


class DiscussionforumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discussionforum
        fields = ["content", "author", "created_at"]
