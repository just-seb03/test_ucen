from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('msc_cristian/', include('msc_cristian.urls')),
    path('msc_masi/', include('msc_masi.urls')),
    path('msc_seb/', include('msc_seb.urls')),
]
