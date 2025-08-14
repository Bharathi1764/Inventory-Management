from django.contrib import admin
from django.utils.html import format_html
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'price', 'quantity', 'update_link')
    search_fields = ('name', 'description')
    list_filter = ('price', 'quantity')

    def update_link(self, obj):
        return format_html(
            '<a style="padding:4px 10px; background-color:#3c8dbc; color:white; border-radius:4px;" href="{}">Update</a>',
            f'/admin/inventory/product/{obj.id}/change/'
        )

    update_link.short_description = 'Update Product'
