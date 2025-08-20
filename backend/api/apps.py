from django.apps import AppConfig

class ApiConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "api"
    verbose_name = "API"

    def ready(self):
        from backend.custom_admin import custom_admin_site
        self.module.admin_site = custom_admin_site
