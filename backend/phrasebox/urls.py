from django.urls import path
from phrasebox import views

urlpatterns = [
    path("phrasebox/", views.PhraseboxList.as_view()),
]
