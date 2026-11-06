from django.db import migrations

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
