from rest_framework import viewsets

from .models import Album
from .ModelSerializer import AlbumSerializer


class AlbumViewSet(viewsets.ModelViewSet):
    """
    ViewSet que proporciona las operaciones completas de CRUD
    (list, create, retrieve, update, partial_update, destroy) para Album.
    """

    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
