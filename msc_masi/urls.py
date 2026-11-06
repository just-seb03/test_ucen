from django.urls import path
from . import views

urlpatterns = [
    # Ruta raíz de la app (http://127.0.0.1:8000/msc_masi/)
    path('', views.AlbumList.as_view(), name='lista_albumes'),
    path('albumes/', views.AlbumList.as_view(), name='lista_albumes_alt'),
    path('crear/', views.AlbumList.as_view(), name='crear_album'),
    path('albumes/crear/', views.AlbumList.as_view(), name='crear_album_alt'),
    path('<int:pk>/', views.AlbumDetail.as_view(), name='detalle_album'),
    path('albumes/<int:pk>/', views.AlbumDetail.as_view(), name='detalle_album_alt'),
]