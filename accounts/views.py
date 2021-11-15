from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.generics import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.views import TokenObtainPairView

from accounts.serializers import AdminTokenObtainPairSerializer, GetTokenObtainPairSerializer

from .models import User


# Create your views here.
class UserView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    authentication_classes = [JWTAuthentication]
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    # create new user
    def create(self, request):
        post_data = dict(request.data)
        
        email = User.objects.filter(email=post_data['email'])
        if email.exists():
            return Response({"response": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)
        
        if post_data["password"] != post_data["password2"]:
            return Response({"response": "Passwords doesn't match"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            email=post_data['email'],
            password=post_data['password'],
            is_superuser = post_data['is_superstaff'],
            is_staff = post_data['is_staff'],
        )

        new_user = {
            "response": "Your Registration Is Successful",
            "id": user.id,
            "email": user.email,
            "is_staff": user.is_staff,
            "is_superuser": user.is_superuser
        }
        user.set_password(post_data['password'])
        user.save()
        return Response(new_user, status=status.HTTP_200_OK)

class UserRoleCheckView(TokenObtainPairView):
    permission_class = [IsAdminUser]
    serializer_class = AdminTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):

        response = super().post(request, *args, **kwargs)
        return response
    
class GetTokenView(TokenObtainPairView):
    serializer_class = GetTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        try:
            response = super().post(request, *args, **kwargs)
            return response
        except Exception as e:
            return Response({"error":True, "message": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
class UserChangePasswordView(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
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
            responseDict = {"error":False, "message":"User password updated successfully"}
        except Exception as e:
            responseDict = {"error":True, "message": str(e)}
        return Response(responseDict, status=status.HTTP_200_OK)
