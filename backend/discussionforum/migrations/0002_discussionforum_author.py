# Generated by Django 4.2.6 on 2023-10-07 06:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('discussionforum', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='discussionforum',
            name='author',
            field=models.TextField(default='admin'),
        ),
    ]
