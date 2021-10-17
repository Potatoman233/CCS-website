from django.urls.conf import include
from mymApp.urls import router as approuter
from accounts.urls import router as accrouter
from mymApp.views import ClientNameViewSet
from accounts.views import CheckUserRole
from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(approuter.urls)),
    path('api/', include(accrouter.urls)),
    path('api/gettoken/', TokenObtainPairView.as_view(), name="gettoken"),
    path('api/refresh_token/', TokenRefreshView.as_view(), name="refreshtoken"),
    path('api/clientbyname/<str:name>', ClientNameViewSet.as_view(), name="clientbyname"),
]
