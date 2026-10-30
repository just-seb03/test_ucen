from django.urls import path
from . import views

urlpatterns = [
    path('msc_cristian/', views.lista_albumes, name='lista_albumes'),
    path('msc_cristian/crear/', views.crear_album, name='crear_album'),
]
