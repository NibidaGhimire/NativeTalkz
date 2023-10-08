from django import forms
from .models import Discussionforum


class DiscussionforumForm(forms.ModelForm):
    class Meta:
        model = Discussionforum
        fields = [
            "content",
            "author",
        ]  # Customize this list to include the fields you want in the form
