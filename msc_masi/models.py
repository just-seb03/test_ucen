from django.db import models


class Album(models.Model):
    album = models.CharField(max_length=200)
    artista = models.CharField(max_length=200)
    fecha_lanzamiento = models.DateField()
    puntuacion = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return self.album
