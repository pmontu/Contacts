from django.http import HttpResponse
import json
from contactsbook.models import *
from django.conf import settings
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

def login_required(fun):
	def decoration(*args, **kwargs):
		if not args[0].user.is_authenticated():
			raise Exception("Please Login")
		return fun(*args, **kwargs)
	return decoration

def contacttodict(contact):
	return {
		"name" : contact.name,
		"id" : contact.id,
		"image" : settings.MEDIA_URL + str(contact.image)
	}

def phonetodict(phone):
	return {
		"number":phone.number,
		"phone_type_display":phone.get_phone_type_display(),
		"phone_type":phone.phone_type,
		"id":phone.id,
		"contact:":phone.contact.id
	}

def addresstodict(address):
	return {
		"number":address.number,
		"street":address.street,
		"area":address.area,
		"city":address.city,
		"pincode":address.pincode,
		"contact":address.contact.id
	}

@login_required
def contact_query(request):
	contacts = Contact.objects.filter(owner = request.user)
	data = []
	for contact in contacts:
		data.append(contacttodict(contact))
	return HttpResponse(json.dumps(data))

@login_required
def contact_get(request, id):
	contact = Contact.objects.get(id = id)
	data = contacttodict(contact)
	return HttpResponse(json.dumps(data))

@login_required
def address_query(request):
	query = json.loads(request.body.decode('utf-8'))
	kwargs = {
		"contact" : Contact.objects.get(id = query["contact"]) if "contact" in query else None
	}
	addresses = Address.objects.filter(**kwargs)
	data = []
	for address in addresses:
		data.append(addresstodict(address))
	return HttpResponse(json.dumps(data))

@login_required
def phone_query(request):
	query = json.loads(request.body.decode('utf-8'))
	kwargs = {
		"contact" : Contact.objects.get(id = query["contact"]) if "contact" in query else None
	}
	phones = Phone.objects.filter(**kwargs)
	data = []
	for phone in phones:
		data.append(phonetodict(phone))
	return HttpResponse(json.dumps(data))

@login_required
def phone_master(request):
	data = []
	for entry in Phone.PHONE_TYPE_CHOICES:
		data.append({
			"id":entry[0],
			"name":entry[1]
		})
	return HttpResponse(json.dumps(data))
