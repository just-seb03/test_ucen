from django.db import migrations


def cargar_datos_iniciales(apps, schema_editor):
    Album = apps.get_model('msc_seb', 'Album')
    datos = [
        {
            'album': 'Another One',
            'artista': 'Mac Demarco',
            'fecha_lanzamiento': '2015-08-07',
            'puntuacion': 4.70,
        },
        {
            'album': '「Forever； EverNostalghia」 Image SoundAlbum',
            'artista': 'Storm-Drunk Whale',
            'fecha_lanzamiento': '2026-06-27',
            'puntuacion': 5.00,
        },
        {
            'album': 'blue pants',
            'artista': 'A L E X',
            'fecha_lanzamiento': '2022-05-02',
            'puntuacion': 4.67,
        },
        {
            'album': 'Salad Days',
            'artista': 'Mac Demarco',
            'fecha_lanzamiento': '2014-04-01',
            'puntuacion': 4.50,
        },
    ]
    for d in datos:
        Album.objects.get_or_create(album=d['album'], defaults=d)


def revertir_datos_iniciales(apps, schema_editor):
    Album = apps.get_model('msc_seb', 'Album')
    Album.objects.filter(
        album__in=[
            'Another One',
            '「Forever； EverNostalghia」 Image SoundAlbum',
            'blue pants',
            'Salad Days',
        ]
    ).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('msc_seb', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(cargar_datos_iniciales, revertir_datos_iniciales),
    ]
