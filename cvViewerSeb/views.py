from django.shortcuts import render
from .data import PROFILE_DATA

def profile_view(request):
    """
    Renderiza el perfil completo de just_seb03 utilizando el template
    centralizado templates/profile.html y los assets de static/img/.
    """
    usuario_logueado = request.session.get('perfil_nombre') or (
        request.user.first_name if request.user.is_authenticated else None
    )
    is_mi_perfil = (usuario_logueado == PROFILE_DATA['usuario'])

    context = {
        'data': PROFILE_DATA,
        'usuario': PROFILE_DATA['usuario'],
        'usuario_logueado': usuario_logueado,
        'is_mi_perfil': is_mi_perfil,
        'cv_url': PROFILE_DATA.get('cv_url'),
    }
    return render(request, 'profile.html', context)


def cv_view(request):
    """
    Renderiza la vista de Curriculum Vitae utilizando el template
    centralizado templates/cv_viewer.html.
    """
    return render(request, 'cv_viewer.html', {
        'nombre': PROFILE_DATA['nombre'],
        'usuario': PROFILE_DATA['usuario'],
        'app_name': 'cvViewerSeb',
        'rol': PROFILE_DATA['rol'],
        'perfil_url': '/cv/seb/',
    })
