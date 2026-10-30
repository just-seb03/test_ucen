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


@api_view(['GET'])
def get_canciones(request):
    return Response(CANCIONES_DEFAULT, status=status.HTTP_200_OK)