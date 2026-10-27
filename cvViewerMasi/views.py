from django.shortcuts import render
from django.templatetags.static import static


PROFILE_DATA = {
    'bg': static('cvViewerMasi/img/MCantuarias/bg.jpg'),
    'artistaName': 'Siames',
    'bio': 'Me gustan las canciones lentas',
    'covers': [
        {
            'src': static('cvViewerMasi/img/MCantuarias/cover1.jpg'),
            'title': 'Anything',
            'artist': 'Adrianne Lenker',
        },
        {
            'src': static('cvViewerMasi/img/MCantuarias/cover2.jpg'),
            'title': 'Selfless',
            'artist': 'The Strokes',
        },
        {
            'src': static('cvViewerMasi/img/MCantuarias/cover3.jpg'),
            'title': 'Yours & mine',
            'artist': 'Zimmer90',
        },
    ],
    'cv_url': '/cv/masi/',
}


def profile_view(request):
    usuario_logueado = request.session.get('perfil_nombre') or (
        request.user.first_name if request.user.is_authenticated else None
    )
    return render(request, 'cvViewerMasi/profile.html', {
        'usuario': 'MCantuarias',
        'data': PROFILE_DATA,
        'usuario_logueado': usuario_logueado,
        'is_mi_perfil': usuario_logueado == 'MCantuarias',
        'cv_url': PROFILE_DATA['cv_url'],
    })


def cv_view(request):
    return render(request, 'cvViewerMasi/cv_viewer.html', {
        'nombre': 'Martín Cantuarias',
        'usuario': 'MCantuarias',
        'app_name': 'cvViewerMasi',
        'rol': 'Desarrollador de Software',
        'perfil_url': '/perfil/MCantuarias/',
    })
