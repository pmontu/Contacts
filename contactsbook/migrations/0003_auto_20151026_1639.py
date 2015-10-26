# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('contactsbook', '0002_contact_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='owner',
            field=models.ForeignKey(default=1, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='contact',
            name='image',
            field=models.ImageField(default='contacts/no-img.png', upload_to='contacts/'),
        ),
        migrations.AlterField(
            model_name='phone',
            name='phone_type',
            field=models.CharField(choices=[('WK', 'Work'), ('HO', 'Home'), ('CE', 'Cell')], max_length=2, default='CE'),
        ),
    ]
