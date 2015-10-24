from rest_framework import serializers
from contactsbook.models import *

class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ('url', 'name', 'image', 'id')

class AddressSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Address
        fields = ('url', 'number', 'street', 'area', 'city', 'pincode', 'contact', 'id')

class PhoneSerializer(serializers.HyperlinkedModelSerializer):
    phone_type = serializers.ChoiceField(choices=Phone.PHONE_TYPE_CHOICES)
    class Meta:
        model = Phone
        fields = ('url', 'phone_type', 'number', 'contact','id')