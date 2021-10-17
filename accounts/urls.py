from django.db import router
from accounts.views import CheckUserRole, UserChangePasswordView, UserView
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import routers

router = routers.DefaultRouter()

router.register('register', UserView, basename="register")
router.register('updatePassword', UserChangePasswordView, basename="updatePassword")
router.register('getUserRole', CheckUserRole, basename="getUserRole")