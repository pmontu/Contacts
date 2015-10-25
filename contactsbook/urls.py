from django.conf.urls import url
from contactsbook.views import *

urlpatterns = [
	url(r"^contact/get/(?P<id>[0-9]+)",contact_get),
	url(r"^contact/",contact_query),
	url(r"^phone/",phone_query)
]
