from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Album
from .serializers import AlbumSerializer


class AlbumList(APIView):
    """
    Lista todos los álbumes o crea un nuevo álbum.
    """
    def get(self, request):
        albumes = Album.objects.all()
        serializer = AlbumSerializer(albumes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AlbumSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
