from django.http import HttpResponse
import json
from contactsbook.models import *
from django.conf import settings

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
		"id":phone.id
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
def contact_get(request, id):
	contact = Contact.objects.get(id = id)
	data = contacttodict(contact)
	return HttpResponse(json.dumps(data))

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

def contact_query(request):
	try:
		query = json.loads(request.body.decode('utf-8'))
	except:
		kwargs = {}
	contacts = Contact.objects.filter(**kwargs)
	data = []
	for contact in contacts:
		data.append(contacttodict(contact))
	return HttpResponse(json.dumps(data))