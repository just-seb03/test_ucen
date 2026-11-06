from rest_framework import viewsets
from .models import Album
from .serializers import AlbumSerializer


class AlbumViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite ver o editar álbumes utilizando ModelViewSet.
    """
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
