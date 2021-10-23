from django.views import generic
from rest_framework import status
from rest_framework import response
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.permissions import AllowAny
from rest_framework.generics import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth.models import User

from accounts.serializers import UserSerializer


# Create your views here.
class UserView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    authentication_classes = [JWTAuthentication]
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    # create new user
    def create(self, request):
        post_data = dict(request.data)
        user_name = User.objects.filter(username=post_data['username'])
        if user_name.exists():
            return Response({"response": "username already taken"}, status=status.HTTP_400_BAD_REQUEST)
        
        email = User.objects.filter(email=post_data['email'])
        if email.exists():
            return Response({"response": "email already exists"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            username=post_data['username'],
            email=post_data['email'],
            password=post_data['password'],
            is_superuser = post_data['is_superstaff'],
            is_staff = post_data['is_staff'],
        )

        new_user = {
            "response": "Your Registration Is Successful",
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "is_staff": user.is_staff,
            "is_superuser": user.is_superuser
        }
        user.set_password(post_data['password'])
        user.save()
        return Response(new_user, status=status.HTTP_200_OK)
    
class CheckUserRole(viewsets.ViewSet):
    
    def retrieve(self, request, pk = None):
        username = self.kwargs['pk']
        user = User.objects.filter(username = username)
        user_data = user.values('username', 'is_staff', 'is_superuser')
        return Response(user_data[0], status=status.HTTP_200_OK)
    
class UserChangePasswordView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    authentication_classes = [JWTAuthentication]
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    
    def update(self, request, pk=None):
        post_data = dict(request.data)
        userData = User.objects.get(id = pk)
        try:
            # check old password same as original password
            if not userData.check_password(post_data['oldpassword']):
                return Response({"error": True, "message":"Old password entered is not the same"}, 
                                    status=status.HTTP_400_BAD_REQUEST)

            userData.set_password(post_data['password'])
            userData.save()
            responseDict = {"error":False, "message":"User updated successfully"}
        except Exception as e:
            responseDict = {"error":True, "message": str(e)}
        return Response(responseDict, status=status.HTTP_200_OK)
