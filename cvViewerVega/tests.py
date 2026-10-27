from django.test import TestCase, Client
from django.urls import reverse

class CvViewerVegaTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_cv_vega_route(self):
        response = self.client.get('/cv/vega/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'cvViewerVega/cv_viewer.html')
        self.assertTemplateUsed(response, 'base.html')
        self.assertContains(response, 'cvViewerVega')
        self.assertContains(response, 'Cris5604')
        self.assertContains(response, 'Richard Ashcroft')
        self.assertContains(response, 'Ode To The Mets')
        self.assertContains(response, 'Dont Look Back In Anger')
        self.assertContains(response, 'New Person, Same Old Mistakes')
