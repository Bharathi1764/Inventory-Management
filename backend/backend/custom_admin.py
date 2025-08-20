from django.contrib import admin

class CustomAdminSite(admin.AdminSite):
    site_header = "Inventory Management Admin"
    site_title = "Inventory Management Admin Portal"
    index_title = "Welcome to Inventory Management Admin"

    def each_context(self, request):
        context = super().each_context(request)
        context['site_css'] = 'admin/css/custom_admin.css'
        return context

custom_admin_site = CustomAdminSite(name='custom_admin')