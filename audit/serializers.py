import json
from rest_framework import serializers
from easyaudit.models import CRUDEvent
import pytz, json

# override the default to_representation method,
# to prevent the JSON valued attribute from serialized twice
class customJSONField(serializers.Field):
    def to_representation(self, value):
        return json.loads(value)

class auditLogSerializer(serializers.ModelSerializer):
    
    email = serializers.ReadOnlyField(source = 'user.email')
    event_type = serializers.CharField(source= 'get_event_type_display')
    datetime = serializers.DateTimeField(default_timezone=pytz.timezone("Asia/Kuala_Lumpur"), format="%Y-%m-%d %H:%M:%S")
    changed_fields = customJSONField()
    
    class Meta:
        model = CRUDEvent
        fields = ['id','event_type', 'datetime', 'user_id','email', 'changed_fields']
        
        