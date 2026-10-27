from django.test import TestCase
from django.urls import reverse
from django.contrib.staticfiles import finders


class CvViewerMasiTests(TestCase):
    def test_profile_uses_app_template_and_assets(self):
        response = self.client.get(reverse('profile_masi'))

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'cvViewerMasi/profile.html')
        self.assertContains(response, 'Siames')
        self.assertContains(response, '/static/cvViewerMasi/css/base.css')
        self.assertContains(response, '/static/cvViewerMasi/css/profile.css')
        self.assertContains(response, '/static/cvViewerMasi/js/profile.js')
        self.assertContains(response, '/static/cvViewerMasi/img/MCantuarias/bg.jpg')
        self.assertContains(response, '/static/cvViewerMasi/img/MCantuarias/cover1.jpg')

        self.assertIsNotNone(finders.find('cvViewerMasi/css/profile.css'))
        self.assertIsNotNone(finders.find('cvViewerMasi/img/MCantuarias/cover1.jpg'))

    def test_cv_uses_app_template(self):
        response = self.client.get(reverse('cv_masi'))

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'cvViewerMasi/cv_viewer.html')
        self.assertContains(response, 'cvViewerMasi')
