"""
URL configuration for test_ucen project.
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', RedirectView.as_view(url='msc_cristian/', permanent=False)),
    path('', include('msc_cristian.urls')),
    path('api/', include('msc_cristian.urls')),
]
