from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Album
from .ModelSerializer import AlbumSerializer


@api_view(["GET"])
def lista_albumes(request):
    albumes = Album.objects.all()
    serializer = AlbumSerializer(albumes, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def crear_album(request):
    serializer = AlbumSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "PATCH", "DELETE"])
def detalle_album(request, pk):
    album = get_object_or_404(Album, pk=pk)

    if request.method == "DELETE":
        album.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    if request.method in ("PUT", "PATCH"):
        serializer = AlbumSerializer(
            album,
            data=request.data,
            partial=request.method == "PATCH",
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return Response(AlbumSerializer(album).data)