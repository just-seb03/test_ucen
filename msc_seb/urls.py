from django.urls import path
from . import views

urlpatterns = [
    # Ruta raíz de la app (http://127.0.0.1:8000/msc_seb/)
    path('', views.lista_albumes, name='lista_albumes'),
    path('albumes/', views.lista_albumes, name='lista_albumes_alt'),

    # Rutas para crear
    path('crear/', views.crear_album, name='crear_album'),
    path('albumes/crear/', views.crear_album, name='crear_album_alt'),
]
