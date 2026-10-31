from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

albumes = [
    {
        "id": 1,
        "album": "(What’s the Story) Morning Glory?",
        "Banda": "Oasis",
        "fecha_lanzamiento": "1995-10-02",
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
    },
]


@api_view(['GET'])
def lista_albumes(request):
    """Devuelve la lista completa de álbumes."""
    return Response(albumes)


@api_view(['POST'])
def crear_album(request):
    """Crea un nuevo álbum y lo agrega a la lista."""
    nuevo_id = max([a['id'] for a in albumes], default=0) + 1
    nuevo_album = {k: v for k, v in request.data.items()}
    nuevo_album['id'] = nuevo_id
    albumes.append(nuevo_album)
    return Response(nuevo_album, status=status.HTTP_201_CREATED)
