from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status


class AlbumesAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_lista_albumes_get_json(self):
        response = self.client.get('/msc_cristian/', HTTP_ACCEPT='application/json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(len(response.data) >= 3)
        self.assertEqual(response.data[0]['Banda'], 'Oasis')

    def test_lista_albumes_get_html_interfaz_navegable(self):
        # La interfaz navegable de DRF se renderiza cuando el cliente pide text/html
        response = self.client.get('/msc_cristian/', HTTP_ACCEPT='text/html')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('text/html', response['Content-Type'])
        self.assertIn(b'Django REST framework', response.content)

    def test_crear_album_post(self):
        nuevo_album = {
            "album": "Random Access Memories",
            "Banda": "Daft Punk",
            "fecha_lanzamiento": "2013-05-17",
            "puntuacion": 5
        }
        response = self.client.post('/msc_cristian/crear/', nuevo_album, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('id', response.data)
        self.assertEqual(response.data['Banda'], 'Daft Punk')

    def test_crear_album_get_interfaz_navegable(self):
        response = self.client.get('/msc_cristian/crear/', HTTP_ACCEPT='text/html')
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertIn(b'Django REST framework', response.content)
