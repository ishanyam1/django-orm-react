# Generated by Django 4.1.3 on 2022-11-14 20:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='job',
            new_name='role',
        ),
    ]
