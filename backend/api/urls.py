from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SignUpView, ProductViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('', include(router.urls)),
]
