from django.shortcuts import render

# Datos del perfil Cris5604 migrados desde OLD
CRIS5604_DATA = {
    'bg': '/static/img/Cris5604/bg.jpg',
    'artistaName': 'Richard Ashcroft',
    'bio': 'Poser de manual, no puedo cambiar mi molde.',
    'covers': [
        {'src': '/static/img/Cris5604/cover1.jpg', 'title': 'Ode To The Mets', 'artist': 'The Strokes'},
        {'src': '/static/img/Cris5604/cover2.jpg', 'title': 'Dont Look Back In Anger', 'artist': 'Oasis'},
        {'src': '/static/img/Cris5604/cover3.jpg', 'title': 'New Person, Same Old Mistakes', 'artist': 'Tame Impala'},
    ],
}

def cv_view(request):
    usuario_logueado = request.session.get('perfil_nombre') or (request.user.first_name if request.user.is_authenticated else None)
    context = {
        'nombre': 'Cristián Vega',
        'usuario': 'Cris5604',
        'app_name': 'cvViewerVega',
        'rol': 'Desarrollador de Software',
        'data': CRIS5604_DATA,
        'usuario_logueado': usuario_logueado,
        'is_mi_perfil': (usuario_logueado == 'Cris5604'),
    }
    return render(request, 'cvViewerVega/cv_viewer.html', context)

