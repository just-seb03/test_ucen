from django.urls import path
from . import views

urlpatterns = [
    path('', views.lista_albumes, name='lista_albumes'),
    path('crear/', views.crear_album, name='crear_album'),
]
