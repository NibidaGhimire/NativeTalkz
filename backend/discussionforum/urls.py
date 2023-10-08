from django.urls import path
from discussionforum import views

urlpatterns = [
    path("discussionforum/", views.DiscussionforumList.as_view()),
    path(
        "discussionforum/add/",
        views.DiscussionforumList.as_view(),
        name="discussionforum-create",
    ),
]
