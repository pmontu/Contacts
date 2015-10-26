from django.db import models
from django.contrib.auth.models import User

class Contact(models.Model):
	name = models.CharField(max_length = 200)
	image = models.ImageField(upload_to='contacts/', default="contacts/no-img.png")
	owner = models.ForeignKey(User, default=1)

	def __unicode__(self):
		return self.name
	def __str__(self):
		return self.name

class Address(models.Model):
	number = models.CharField(max_length = 200)
	street = models.CharField(max_length = 200)
	area = models.CharField(max_length = 200)
	city = models.CharField(max_length = 200)
	pincode = models.CharField(max_length = 200)
	contact = models.ForeignKey(Contact)

	def __unicode__(self):
		return  "{0} {1} {2} {3} {4} {5}".format(self.contact.name, self.number, self.street, self.area, self.city, self.pincode)
	def __str__(self):
		return  "{0} {1} {2} {3} {4} {5}".format(self.contact.name, self.number, self.street, self.area, self.city, self.pincode)

class Phone(models.Model):

	WORK = 'WK'
	HOME = 'HO'
	CELL = 'CE'
	PHONE_TYPE_CHOICES = (
		(WORK, 'Work'),
		(HOME, 'Home'),
		(CELL, 'Cell'),
	)
	phone_type = models.CharField(max_length=2,
		choices=PHONE_TYPE_CHOICES,
		default=CELL)
	number = models.CharField(max_length = 50)
	contact = models.ForeignKey(Contact)

	def __unicode__(self):
		return "{0} {1} {2}".format(self.contact.name, self.get_phone_type_display(), self.number)

	def __str__(self):
		return "{0} {1} {2}".format(self.contact.name, self.get_phone_type_display(), self.number)