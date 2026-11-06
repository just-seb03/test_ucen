from django.db import models


class Album(models.Model):
    album = models.CharField(max_length=200)
    artista = models.CharField(max_length=150)
    fecha_lanzamiento = models.DateField()
    puntuacion = models.DecimalField(max_digits=3, decimal_places=2)

    def __str__(self):
        return f"{self.album} - {self.artista}"
