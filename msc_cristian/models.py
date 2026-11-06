from django.db import models

# Create your models here.
class Album(models.Model):
    album = models.CharField(max_length=200)
    Banda = models.CharField(max_length=200)
    fecha_lanzamiento = models.DateField()
    puntuacion = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return self.album No newline at end of file
