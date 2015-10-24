from rest_framework import serializers
from contactsbook.models import *

class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ('url', 'name', 'image')

class AddressSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Address
        fields = ('url', 'number', 'street', 'area', 'city', 'pincode', 'contact')

class PhoneSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Phone
        fields = ('url', 'phone_type', 'number', 'contact')