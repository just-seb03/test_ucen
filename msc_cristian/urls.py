from django.urls import path
from . import views

urlpatterns = [
    path('albumes/', views.lista_albumes, name='lista_albumes'),
    path('albumes/crear/', views.crear_album, name='crear_album'),
]

