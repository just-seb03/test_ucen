import json
from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.views.decorators.http import require_POST

# Credenciales válidas y sus nombres de perfil asociados
VALID_CREDENTIALS = {
    'cristian.vegag': {
        'password': '12345',
        'perfil': 'Cris5604',
        'cv_url': '/cv/vega/',
    },
    'mcantuarias': {
        'password': '1234567',
        'perfil': 'MCantuarias',
        'cv_url': '/cv/masi/',
    },
    'just_seb03': {
        'password': '1234',
        'perfil': 'just_seb03',
        'cv_url': '/cv/seb/',
    },
}

# Perfiles musicales
PROFILES_DATA = {
    'Cris5604': {
        'bg': '/static/img/Cris5604/bg.jpg',
        'artistaName': 'Richard Ashcroft',
        'bio': 'Poser de manual, no puedo cambiar mi molde.',
        'covers': [
            {'src': '/static/img/Cris5604/cover1.jpg', 'title': 'Ode To The Mets', 'artist': 'The Strokes'},
            {'src': '/static/img/Cris5604/cover2.jpg', 'title': 'Dont Look Back In Anger', 'artist': 'Oasis'},
            {'src': '/static/img/Cris5604/cover3.jpg', 'title': 'New Person, Same Old Mistakes', 'artist': 'Tame Impala'},
        ],
        'cv_url': '/cv/vega/',
    },
    'just_seb03': {
        'bg': '/static/img/just_seb03/bg.jpg',
        'artistaName': 'Virtual Riot',
        'bio': 'Me gusta que me duela el oido.',
        'covers': [
            {'src': '/static/img/just_seb03/cover1.jpg', 'title': 'Skitzofrenia Simulation', 'artist': 'Sewerslvt'},
            {'src': '/static/img/just_seb03/cover2.jpg', 'title': 'Tidal Memory Exo', 'artist': 'Iglooghost'},
            {'src': '/static/img/just_seb03/cover3.jpg', 'title': 'Da Makani', 'artist': 'Shakatak'},
        ],
        'cv_url': '/cv/seb/',
    },
}

DEFAULT_PROFILE = {
    'bg': '',
    'artistaName': 'Desconocido',
    'bio': 'Sin biografía disponible.',
    'covers': [
        {'src': '/static/img/covers/cover4.jpg', 'title': 'What Happened to the Heart?', 'artist': 'AURORA'},
        {'src': '/static/img/covers/cover5.jpg', 'title': 'Absolution', 'artist': 'Muse'},
        {'src': '/static/img/covers/cover6.jpg', 'title': 'Broken Machine', 'artist': 'Nothing But Thieves'},
    ],
    'cv_url': None,
}


def ensure_django_user(username, password, display_name):
    """Garantiza que el usuario exista en auth_user para sesión nativa de Django."""
    user, created = User.objects.get_or_create(username=username)
    if created or not user.check_password(password):
        user.set_password(password)
        user.first_name = display_name
        user.save()
    return user


def landing(request):
    """Página de inicio (Landing) con sección de vinilo giratorio y música."""
    return render(request, 'landing.html')


def login_view(request):
    """Página de inicio de sesión con animación de casete 3D."""
    if request.method == 'POST':
        usuario = request.POST.get('usuario', '').strip().lower()
        password = request.POST.get('password', '')

        if not usuario:
            return render(request, 'login.html', {'error': 'Por favor ingresa un usuario', 'form_usuario': usuario})

        if usuario not in VALID_CREDENTIALS:
            return render(request, 'login.html', {'error': 'El usuario no existe', 'form_usuario': usuario})

        user_info = VALID_CREDENTIALS[usuario]
        if password != user_info['password']:
            return render(request, 'login.html', {'error': 'Contraseña incorrecta', 'form_usuario': usuario})

        # Autenticación y sesión
        user = ensure_django_user(usuario, password, user_info['perfil'])
        login(request, user)
        request.session['usuario'] = usuario
        request.session['perfil_nombre'] = user_info['perfil']

        return redirect('profile', usuario=user_info['perfil'])

    return render(request, 'login.html')


@require_POST
def api_login(request):
    """Endpoint JSON para autenticación fluida con la animación de casete."""
    try:
        data = json.loads(request.body.decode('utf-8'))
    except Exception:
        data = request.POST

    usuario = (data.get('usuario') or '').strip().lower()
    password = data.get('password') or ''

    if not usuario:
        return JsonResponse({'success': False, 'error': 'Por favor ingresa un usuario'}, status=400)

    if usuario not in VALID_CREDENTIALS:
        return JsonResponse({'success': False, 'error': 'El usuario no existe'}, status=400)

    user_info = VALID_CREDENTIALS[usuario]
    if password != user_info['password']:
        return JsonResponse({'success': False, 'error': 'Contraseña incorrecta'}, status=400)

    # Iniciar sesión en Django
    user = ensure_django_user(usuario, password, user_info['perfil'])
    login(request, user)
    request.session['usuario'] = usuario
    request.session['perfil_nombre'] = user_info['perfil']

    redirect_url = f"/perfil/{user_info['perfil']}/"
    return JsonResponse({
        'success': True,
        'usuario': user_info['perfil'],
        'redirect_url': redirect_url,
    })


def logout_view(request):
    """Cerrar sesión y limpiar datos de usuario."""
    logout(request)
    request.session.flush()
    return redirect('landing')


def profile_view(request, usuario):
    """Página de perfil del usuario con su estante de vinilos."""
    data = PROFILES_DATA.get(usuario, DEFAULT_PROFILE)
    usuario_logueado = request.session.get('perfil_nombre') or (request.user.first_name if request.user.is_authenticated else None)
    is_mi_perfil = (usuario == usuario_logueado)

    context = {
        'usuario': usuario,
        'data': data,
        'usuario_logueado': usuario_logueado,
        'is_mi_perfil': is_mi_perfil,
        'cv_url': data.get('cv_url'),
    }
    return render(request, 'profile.html', context)
