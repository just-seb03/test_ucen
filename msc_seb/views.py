from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

albumes = [
    {
        "id": 1,
        "album": "Another One",
        "artista": "Mac Demarco",
        "fecha_lanzamiento": "2015-08-07",
        "puntuacion": "4.7",
    },
    {
        "id": 2,
        "album": "「Forever； EverNostalghia」 Image SoundAlbum",
        "artista": "Storm-Drunk Whale",
        "fecha_lanzamiento": "2026-06-27",
        "puntuacion": "5",
    },
    {
        "id": 3,
        "album": "blue pants",
        "artista": "A L E X",
        "fecha_lanzamiento": "2022-05-02",
        "puntuacion": "4.67",
    },
]


@api_view(['GET'])
def lista_albumes(request):
    """Devuelve la lista completa de álbumes."""
    return Response(albumes)
