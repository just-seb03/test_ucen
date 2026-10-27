from django.test import TestCase, Client
from django.urls import reverse

class CvViewerSebTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_seb_profile_view_direct_url(self):
        """Prueba acceso a /cv/seb/"""
        res = self.client.get(reverse('profile_seb'))
        self.assertEqual(res.status_code, 200)
        self.assertContains(res, '@just_seb03')
        self.assertContains(res, 'Virtual Riot')
        self.assertContains(res, 'Me gusta que me duela el oido.')
        self.assertContains(res, 'Skitzofrenia Simulation')
        self.assertContains(res, 'Sewerslvt')
        self.assertContains(res, 'Tidal Memory Exo')
        self.assertContains(res, 'Iglooghost')
        self.assertContains(res, 'Da Makani')
        self.assertContains(res, 'Shakatak')
        self.assertContains(res, 'like-button')

    def test_seb_profile_view_via_core_perfil_url(self):
        """Prueba acceso a /perfil/just_seb03/ delegado a cvViewerSeb"""
        res = self.client.get(reverse('profile', kwargs={'usuario': 'just_seb03'}))
        self.assertEqual(res.status_code, 200)
        self.assertContains(res, '@just_seb03')
        self.assertContains(res, 'Virtual Riot')
        self.assertContains(res, 'Sewerslvt')

    def test_seb_cv_detail_view(self):
        """Prueba acceso a la vista detallada de CV /cv/seb/cv/"""
        res = self.client.get(reverse('cv_seb_detail'))
        self.assertEqual(res.status_code, 200)
        self.assertContains(res, 'Bastián Arredondo')
        self.assertContains(res, 'Desarrollador Full Stack')
        self.assertContains(res, 'Frontend')
        self.assertContains(res, 'Backend')
