from django.urls.conf import include
from mymApp.urls import router as approuter
from accounts.urls import router as accrouter
from audit.urls import router as auditrouter
from accounts.views import UserRoleCheckView, GetTokenView
from mymApp.views import ClientNameViewSet
from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(approuter.urls)),
    path('api/', include(accrouter.urls)),
    path('api/', include(auditrouter.urls)),
    path('api/gettoken/', GetTokenView.as_view(), name="gettoken"),
    path('api/refresh_token/', TokenRefreshView.as_view(), name="refreshtoken"),
    path('api/getUserRole/', UserRoleCheckView.as_view(), name="getUserRole"),
    path('api/clientbyname/<str:name>', ClientNameViewSet.as_view(), name="clientbyname"),
]
