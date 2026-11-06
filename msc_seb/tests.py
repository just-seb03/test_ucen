from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Album


class AlbumAPITests(APITestCase):
    def setUp(self):
        self.album = Album.objects.create(
            album="Another One",
            artista="Mac Demarco",
            fecha_lanzamiento="2015-08-07",
            puntuacion=4.70,
        )

    def test_listar_albumes(self):
        """GET /msc_seb/albumes/ - Listar todos los álbumes"""
        response = self.client.get('/msc_seb/albumes/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_crear_album(self):
        """POST /msc_seb/albumes/ - Crear un nuevo álbum"""
        data = {
            "album": "Salad Days",
            "artista": "Mac Demarco",
            "fecha_lanzamiento": "2014-04-01",
            "puntuacion": "4.50",
        }
        response = self.client.post('/msc_seb/albumes/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Album.objects.count(), 2)
        self.assertEqual(response.data["album"], "Salad Days")

    def test_obtener_detalle_album(self):
        """GET /msc_seb/albumes/<id>/ - Obtener detalle de un álbum"""
        response = self.client.get(f'/msc_seb/albumes/{self.album.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["album"], "Another One")

    def test_actualizar_album(self):
        """PUT /msc_seb/albumes/<id>/ - Actualizar un álbum completo"""
        data = {
            "album": "Another One (Special Edition)",
            "artista": "Mac Demarco",
            "fecha_lanzamiento": "2015-08-07",
            "puntuacion": "4.90",
        }
        response = self.client.put(f'/msc_seb/albumes/{self.album.id}/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.album.refresh_from_db()
        self.assertEqual(self.album.album, "Another One (Special Edition)")

    def test_eliminar_album(self):
        """DELETE /msc_seb/albumes/<id>/ - Eliminar un álbum"""
        response = self.client.delete(f'/msc_seb/albumes/{self.album.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Album.objects.count(), 0)

        response_404 = self.client.get(f'/msc_seb/albumes/{self.album.id}/')
        self.assertEqual(response_404.status_code, status.HTTP_404_NOT_FOUND)
