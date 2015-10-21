# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('number', models.CharField(max_length=200)),
                ('street', models.CharField(max_length=200)),
                ('area', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=200)),
                ('pincode', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Phone',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('phone_type', models.CharField(default=b'CE', max_length=2, choices=[(b'WK', b'Work'), (b'HO', b'Home'), (b'CE', b'Mobile')])),
                ('number', models.CharField(max_length=50)),
                ('contact', models.ForeignKey(to='contactsbook.Contact')),
            ],
        ),
        migrations.AddField(
            model_name='address',
            name='contact',
            field=models.ForeignKey(to='contactsbook.Contact'),
        ),
    ]
