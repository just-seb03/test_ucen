import json
from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User

class WebAppTests(TestCase):
    def setUp(self):
        self.client = Client()
        # Seed default users
        users = [
            ('cristian.vegag', '12345', 'Cris5604'),
            ('mcantuarias', '1234567', 'MCantuarias'),
            ('just_seb03', '1234', 'just_seb03'),
        ]
        for u, p, fn in users:
            User.objects.create_user(username=u, password=p, first_name=fn)

    def test_landing_page(self):
        response = self.client.get(reverse('landing'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Comparte tus Gustos')
        self.assertContains(response, 'Con el Mundo')
        self.assertContains(response, 'vinyl-disk-wrapper')
        self.assertContains(response, 'What Happened to the Heart?')
        self.assertContains(response, 'Absolution')
        self.assertContains(response, 'Broken Machine')

    def test_login_page_get(self):
        response = self.client.get(reverse('login'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'cassette-scene')
        self.assertContains(response, 'A-SIDE')
        self.assertContains(response, 'B-SIDE')
        self.assertContains(response, 'username-input')
        self.assertContains(response, 'password-input')

    def test_api_login_validation(self):
        # Empty user
        res = self.client.post(
            reverse('api_login'),
            data=json.dumps({'usuario': '', 'password': ''}),
            content_type='application/json'
        )
        self.assertEqual(res.status_code, 400)
        self.assertIn('Por favor ingresa un usuario', res.json()['error'])

        # Non-existent user
        res = self.client.post(
            reverse('api_login'),
            data=json.dumps({'usuario': 'unknown_user', 'password': '123'}),
            content_type='application/json'
        )
        self.assertEqual(res.status_code, 400)
        self.assertIn('El usuario no existe', res.json()['error'])

        # Incorrect password
        res = self.client.post(
            reverse('api_login'),
            data=json.dumps({'usuario': 'cristian.vegag', 'password': 'wrong'}),
            content_type='application/json'
        )
        self.assertEqual(res.status_code, 400)
        self.assertIn('Contraseña incorrecta', res.json()['error'])

    def test_api_login_success_cristian(self):
        res = self.client.post(
            reverse('api_login'),
            data=json.dumps({'usuario': 'cristian.vegag', 'password': '12345'}),
            content_type='application/json'
        )
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertTrue(data['success'])
        self.assertEqual(data['usuario'], 'Cris5604')
        self.assertEqual(data['redirect_url'], '/perfil/Cris5604/')

    def test_api_login_success_mcantuarias(self):
        res = self.client.post(
            reverse('api_login'),
            data=json.dumps({'usuario': 'mcantuarias', 'password': '1234567'}),
            content_type='application/json'
        )
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertTrue(data['success'])
        self.assertEqual(data['usuario'], 'MCantuarias')
        self.assertEqual(data['redirect_url'], '/perfil/MCantuarias/')

    def test_api_login_success_just_seb03(self):
        res = self.client.post(
            reverse('api_login'),
            data=json.dumps({'usuario': 'just_seb03', 'password': '1234'}),
            content_type='application/json'
        )
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertTrue(data['success'])
        self.assertEqual(data['usuario'], 'just_seb03')
        self.assertEqual(data['redirect_url'], '/perfil/just_seb03/')

    def test_profile_views(self):
        # Cris5604
        res = self.client.get(reverse('profile', kwargs={'usuario': 'Cris5604'}))
        self.assertEqual(res.status_code, 200)
        self.assertContains(res, 'Richard Ashcroft')
        self.assertContains(res, 'Ode To The Mets')

        # MCantuarias
        res = self.client.get(reverse('profile', kwargs={'usuario': 'MCantuarias'}))
        self.assertEqual(res.status_code, 200)
        self.assertContains(res, 'Siames')
        self.assertContains(res, 'Anything')

        # just_seb03
        res = self.client.get(reverse('profile', kwargs={'usuario': 'just_seb03'}))
        self.assertEqual(res.status_code, 200)
        self.assertContains(res, 'Virtual Riot')
        self.assertContains(res, 'Skitzofrenia Simulation')

    def test_cv_viewer_views(self):
        res_seb = self.client.get('/cv/seb/')
        self.assertEqual(res_seb.status_code, 200)
        self.assertContains(res_seb, 'just_seb03')

        res_seb_cv = self.client.get('/cv/seb/cv/')
        self.assertEqual(res_seb_cv.status_code, 200)
        self.assertContains(res_seb_cv, 'cvViewerSeb')

        res_masi = self.client.get('/cv/masi/')
        self.assertEqual(res_masi.status_code, 200)
        self.assertContains(res_masi, 'cvViewerMasi')

        res_vega = self.client.get('/cv/vega/')
        self.assertEqual(res_vega.status_code, 200)
        self.assertContains(res_vega, 'cvViewerVega')

    def test_logout(self):
        res = self.client.get(reverse('logout'))
        self.assertRedirects(res, reverse('landing'))
