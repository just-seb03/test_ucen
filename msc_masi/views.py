from rest_framework import viewsets

from .ModelSerializer import AlbumSerializer
from .models import Album


class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
