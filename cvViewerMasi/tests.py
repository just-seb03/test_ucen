from django.test import TestCase
from django.urls import reverse
from django.contrib.staticfiles import finders


class CvViewerMasiTests(TestCase):
    def test_profile_reuses_shared_template_and_assets(self):
        response = self.client.get(reverse('profile_masi'))

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'profile.html')
        self.assertContains(response, 'Siames')
        self.assertContains(response, '/static/css/base.css')
        self.assertContains(response, '/static/css/profile.css')
        self.assertContains(response, '/static/js/profile.js')
        self.assertContains(response, '/static/img/MCantuarias/bg.jpg')
        self.assertContains(response, '/static/img/MCantuarias/cover1.jpg')

        self.assertIsNotNone(finders.find('css/profile.css'))
        self.assertIsNotNone(finders.find('img/MCantuarias/cover1.jpg'))

    def test_cv_reuses_shared_template(self):
        response = self.client.get(reverse('cv_masi'))

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'cv_viewer.html')
        self.assertContains(response, 'cvViewerMasi')
