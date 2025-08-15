from django.urls import path
from .views import ProductListCreateView, ProductDetailView, RegisterView

urlpatterns = [
    # Product endpoints
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:id>/', ProductDetailView.as_view(), name='product-detail'),

    # User registration endpoint
    path('register/', RegisterView.as_view(), name='user-register'),
]
