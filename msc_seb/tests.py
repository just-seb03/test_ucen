from rest_framework import status
from rest_framework.test import APITestCase
from .models import Album


class AlbumAPITests(APITestCase):
    def setUp(self):
        self.album = Album.objects.first()
        if not self.album:
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
        self.assertEqual(len(response.data), Album.objects.count())

    def test_crear_album(self):
        """POST /msc_seb/albumes/ - Crear un nuevo álbum"""
        inicial_count = Album.objects.count()
        data = {
            "album": "This Old Dog",
            "artista": "Mac Demarco",
            "fecha_lanzamiento": "2017-05-05",
            "puntuacion": "4.85",
        }
        response = self.client.post('/msc_seb/albumes/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Album.objects.count(), inicial_count + 1)
        self.assertEqual(response.data["album"], "This Old Dog")

    def test_obtener_detalle_album(self):
        """GET /msc_seb/albumes/<id>/ - Obtener detalle de un álbum"""
        response = self.client.get(f'/msc_seb/albumes/{self.album.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["album"], self.album.album)

    def test_actualizar_album(self):
        """PUT /msc_seb/albumes/<id>/ - Actualizar un álbum completo"""
        data = {
            "album": f"{self.album.album} (Remastered)",
            "artista": self.album.artista,
            "fecha_lanzamiento": str(self.album.fecha_lanzamiento),
            "puntuacion": "5.00",
        }
        response = self.client.put(f'/msc_seb/albumes/{self.album.id}/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.album.refresh_from_db()
        self.assertEqual(self.album.album, data["album"])

    def test_eliminar_album(self):
        """DELETE /msc_seb/albumes/<id>/ - Eliminar un álbum"""
        inicial_count = Album.objects.count()
        album_id = self.album.id
        response = self.client.delete(f'/msc_seb/albumes/{album_id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Album.objects.count(), inicial_count - 1)

        response_404 = self.client.get(f'/msc_seb/albumes/{album_id}/')
        self.assertEqual(response_404.status_code, status.HTTP_404_NOT_FOUND)
