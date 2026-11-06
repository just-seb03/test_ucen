import datetime

from django.db import migrations, models


def cargar_albumes_iniciales(apps, schema_editor):
    Album = apps.get_model("msc_masi", "Album")
    albumes = [
        {
            "id": 1,
            "album": "BE NOT AFRAID",
            "artista": "Polyphia",
            "fecha_lanzamiento": datetime.date(2024, 10, 23),
            "puntuacion": "4.9",
        },
        {
            "id": 2,
            "album": "Collide With The Sky",
            "artista": "Pierce The Veil",
            "fecha_lanzamiento": datetime.date(2012, 7, 17),
            "puntuacion": "4.8",
        },
        {
            "id": 3,
            "album": "Absolution",
            "artista": "Muse",
            "fecha_lanzamiento": datetime.date(2003, 9, 15),
            "puntuacion": "4.7",
        },
    ]

    manager = Album.objects.using(schema_editor.connection.alias)
    for datos in albumes:
        manager.get_or_create(
            id=datos["id"],
            defaults={
                "album": datos["album"],
                "artista": datos["artista"],
                "fecha_lanzamiento": datos["fecha_lanzamiento"],
                "puntuacion": datos["puntuacion"],
            },
        )


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Album",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("album", models.CharField(max_length=200)),
                ("artista", models.CharField(max_length=200)),
                ("fecha_lanzamiento", models.DateField()),
                ("puntuacion", models.DecimalField(decimal_places=1, max_digits=3)),
            ],
        ),
        migrations.RunPython(cargar_albumes_iniciales, migrations.RunPython.noop),
    ]
