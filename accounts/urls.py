from django.db import router
from accounts.views import UserChangePasswordView, UserView
from django.urls import path
from rest_framework import routers

router = routers.DefaultRouter()

router.register('register', UserView, basename="register")
router.register('updatePassword', UserChangePasswordView, basename="updatePassword")
# router.register('adminRefreshToken', AdminTokenRefreshView, basename="adminRefreshToken")
# router.register('getUserRole', CheckUserRole, basename="getUserRole")