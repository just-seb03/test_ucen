from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Album
from .ModelSerializer import AlbumSerializer


class AlbumList(APIView):
    """
    Lista todos los álbumes o crea un nuevo álbum.
    """

    def get(self, request, format=None):
        albumes = Album.objects.all()
        serializer = AlbumSerializer(albumes, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = AlbumSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AlbumDetail(APIView):
    """
    Recupera, actualiza o elimina un álbum individual.
    """

    def get_object(self, pk):
        return get_object_or_404(Album, pk=pk)

    def get(self, request, pk, format=None):
        album = self.get_object(pk)
        serializer = AlbumSerializer(album)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        album = self.get_object(pk)
        serializer = AlbumSerializer(album, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        album = self.get_object(pk)
        serializer = AlbumSerializer(album, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        album = self.get_object(pk)
        album.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
