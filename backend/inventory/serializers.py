# inventory/serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product

# ✅ Product Serializer (same as before)
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


# ✅ User Serializer for Registration
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'email']

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data.get('email', '')
        )
        user.set_password(validated_data['password'])  # 🔹 Encrypt password
        user.save()
        return user
