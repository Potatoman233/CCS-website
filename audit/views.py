from django.shortcuts import render
from easyaudit.models import CRUDEvent
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication
import json

from audit.serializers import auditLogSerializer


# Create your views here.
class GetAuditLogView(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def list (self, request):
        # need to filter according to often used tables
        log = CRUDEvent.objects.filter(user_id__is_staff=True)
        serializer = auditLogSerializer(log, many = True)
        data = serializer.data
        response_dict = {"error":False, "message":"Audit Log Data", "data": data}
        return Response(response_dict, status=status.HTTP_200_OK)