from mymApp.views import AppointmentViewSet, ClientNameViewSet, ClientViewSet, CounsellingAssessmentViewSet, ScheduleViewSet
from django.urls import path
from rest_framework import routers


router = routers.DefaultRouter()
router.register('client', ClientViewSet, basename="client")
router.register('appointment', AppointmentViewSet, basename="appointment")
router.register('counsellingAssess', CounsellingAssessmentViewSet, basename="counsellingAssess")
router.register('schedule', ScheduleViewSet, basename="schedule")