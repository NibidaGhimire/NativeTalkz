from django.db import models


class Discussionforum(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.TextField(default="admin")

    def __str__(self):
        return self.content
