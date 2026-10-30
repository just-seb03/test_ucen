from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
CANCIONES_DEFAULT = [
    {
        "id": 1,
        "album": "(What’s the Story) Morning Glory?",
        "Banda": "Oasis",
        "fecha_lanzamiento": "1005-10-02",
        "puntuacion": 4.6,
    },
    {
        "id": 2,
        "album": "The New Abnormal",
        "Banda": "The Strokes",
        "fecha_lanzamiento": "2020-03-10",
        "puntuacion": 5,
    },
    {
        "id": 3,
        "album": "Currents",
        "Banda": "Tame Impala",
        "fecha_lanzamiento": "2015-07-17",
        "puntuacion": 4,
    }
]


def _guardar_album(data):
    nuevo_id = max([a['id'] for a in CANCIONES_DEFAULT], default=0) + 1
    nuevo_album = {k: v for k, v in data.items()}
    nuevo_album['id'] = nuevo_id
    CANCIONES_DEFAULT.append(nuevo_album)
    return nuevo_album


@api_view(['GET', 'POST'])
def lista_albumes(request):
    """Devuelve la lista completa de álbumes o crea un nuevo álbum."""
    if request.method == 'POST':
        nuevo_album = _guardar_album(request.data)
        return Response(nuevo_album, status=status.HTTP_201_CREATED)
    return Response(CANCIONES_DEFAULT)


@api_view(['GET', 'POST'])
def crear_album(request):
    """Crea un nuevo álbum y lo agrega a la lista."""
    if request.method == 'GET':
        return Response({
            "mensaje": "Envía una petición POST con los datos del álbum para crearlo.",
            "ejemplo": {
                "album": "Random Access Memories",
                "Banda": "Daft Punk",
                "fecha_lanzamiento": "2013-05-17",
                "puntuacion": 5
            }
        })
    nuevo_album = _guardar_album(request.data)
    return Response(nuevo_album, status=status.HTTP_201_CREATED)
