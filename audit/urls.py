from rest_framework import routers

from django.urls import path
from audit.views import GetAuditLogView
from rest_framework import routers

router = routers.DefaultRouter()

router.register('getAuditLog', GetAuditLogView, basename="getAuditLog")