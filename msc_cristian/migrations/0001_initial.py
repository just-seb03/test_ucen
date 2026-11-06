import datetime

from django.db import migrations, models


def cargar_albumes(apps, schema_editor):
    Album = apps.get_model("msc_cristian", "Album")
    manager = Album.objects.using(schema_editor.connection.alias)
    albumes = [
        {
            "id": 1,
            "album": "(What’s the Story) Morning Glory?",
            "Banda": "Oasis",
            "fecha_lanzamiento": datetime.date(1995, 10, 2),
            "puntuacion": "4.6",
        },
        {
            "id": 2,
            "album": "The New Abnormal",
            "Banda": "The Strokes",
            "fecha_lanzamiento": datetime.date(2020, 3, 10),
            "puntuacion": "5.0",
        },
        {
            "id": 3,
            "album": "Currents",
            "Banda": "Tame Impala",
            "fecha_lanzamiento": datetime.date(2015, 7, 17),
            "puntuacion": "4.0",
        },
    ]

    for datos in albumes:
        manager.update_or_create(
            id=datos["id"],
            defaults={
                "album": datos["album"],
                "Banda": datos["Banda"],
                "fecha_lanzamiento": datos["fecha_lanzamiento"],
                "puntuacion": datos["puntuacion"],
            },
        )

    manager.exclude(id__in=[1, 2, 3]).delete()


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
                ("Banda", models.CharField(max_length=200)),
                ("fecha_lanzamiento", models.DateField()),
                ("puntuacion", models.DecimalField(decimal_places=1, max_digits=3)),
            ],
        ),
        migrations.RunPython(cargar_albumes, migrations.RunPython.noop),
    ]
