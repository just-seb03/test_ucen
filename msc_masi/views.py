from rest_framework.decorators import api_view
from rest_framework.response import Response

albumes = [
    {
        "id": 1,
        "album": "BE NOT AFRAID",
        "artista": "Polyphia",
        "fecha_lanzamiento": "2024-10-23",
        "puntuacion": 4.9,
    },
    {
        "id": 2,
        "album": "Collide With The Sky",
        "artista": "Pierce The Veil",
        "fecha_lanzamiento": "2012-07-17",
        "puntuacion": 4.8,
    },
    {
        "id": 3,
        "album": "Absolution",
        "artista": "Muse",
        "fecha_lanzamiento": "2003-09-15",
        "puntuacion": 4.7,
    },
]


@api_view(["GET"])
def listar_albumes(request):
    return Response(albumes)
