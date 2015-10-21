from django.db import models

class Contact(models.Model):
	name = models.CharField(max_length = 200)

class Address(models.Model):
	number = models.CharField(max_length = 200)
	street = models.CharField(max_length = 200)
	area = models.CharField(max_length = 200)
	city = models.CharField(max_length = 200)
	pincode = models.CharField(max_length = 200)
	contact = models.ForeignKey(Contact)

class Phone(models.Model):

	WORK = 'WK'
	HOME = 'HO'
	CELL = 'CE'
	PHONE_TYPE_CHOICES = (
		(WORK, 'Work'),
		(HOME, 'Home'),
		(CELL, 'Mobile'),
	)
	phone_type = models.CharField(max_length=2,
		choices=PHONE_TYPE_CHOICES,
		default=CELL)
	number = models.CharField(max_length = 50)
	contact = models.ForeignKey(Contact)