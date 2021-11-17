from django.db.models import fields
from rest_framework import serializers
from mymApp.models import Appointment, Client, CounsellingAssessment
from datetime import datetime, timedelta

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        # returns all attributes form model
        fields = "__all__"
        
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = "__all__"
        
    def to_representation(self, instance):
        # override the to_representation to add extra key with client data
        response = super().to_representation(instance)
        return response
    
class ScheduleSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source="client_id.name")
    
    class Meta:
        model = Appointment
        fields = ["appointment_date", "appointment_time", "title"]
        
    def to_representation(self, instance):
        # override the to_representation to add extra key with client data
        response = super().to_representation(instance)
        # format appointment date and time for scheduler 
        response['start'] = '{}T{}'.format( response['appointment_date'], response['appointment_time'])
        # set end time of appointment 
        endtime = datetime.strptime(response['appointment_time'], "%X") + timedelta(hours=1)
        endtime = endtime.time() 
        response['end'] = '{}T{}'.format( response['appointment_date'], endtime)
        
        response.pop("appointment_date")
        response.pop("appointment_time")
        return response
    
class CounsellingAssessmentSerializer(serializers.ModelSerializer):   
    class Meta:
        model = CounsellingAssessment
        fields = "__all__"
        
    def to_representation(self, instance):
        # override the to_representation to add extra key with client data
        response = super().to_representation(instance)
        return response