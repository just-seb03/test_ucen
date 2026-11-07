from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import AlbumViewSet

router = DefaultRouter()
router.register(r"albumes", AlbumViewSet, basename="albumes")
router.register(r"", AlbumViewSet, basename="album")

urlpatterns = [
    path("", include(router.urls)),
    # Alias de compatibilidad
    path("crear/", AlbumViewSet.as_view({"get": "list", "post": "create"}), name="crear_album"),
    path("albumes/crear/", AlbumViewSet.as_view({"get": "list", "post": "create"}), name="crear_album_alt"),
]
