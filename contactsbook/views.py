from django.http import HttpResponse
import json
from contactsbook.models import *
from django.conf import settings

def contact_get(request, id):
	contact = Contact.objects.get(id = id)
	data = {
		"name" : contact.name,
		"id" : contact.id,
		"image" : settings.MEDIA_URL + str(contact.image)
	}
	return HttpResponse(json.dumps(data))

def contact_query(request):
	query = json.loads(request.body)
	kwargs = {
		"contact" : Contact.objects.get(id = query["contact"]) if "contact" in query else None
	}
	phones = Phone.objects.filter(**kwargs)
	data = []
	for phone in phones:
		data.append({
			"number":phone.number,
			"phone_type_display":phone.get_phone_type_display(),
			"phone_type":phone.phone_type,
			"id":phone.id
			})
	return HttpResponse(json.dumps(data))