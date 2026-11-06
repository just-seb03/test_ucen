from django.urls import path
from . import views

urlpatterns = [
    path("", views.lista_albumes, name="lista_albumes"),
    path("albumes/", views.lista_albumes, name="lista_albumes_alt"),
    path("crear/", views.crear_album, name="crear_album"),
    path("albumes/crear/", views.crear_album, name="crear_album_alt"),
    path("<int:pk>/", views.detalle_album, name="detalle_album"),
    path("albumes/<int:pk>/", views.detalle_album, name="detalle_album_alt"),
]
