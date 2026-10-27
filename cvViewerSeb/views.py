from django.shortcuts import render

def cv_view(request):
    return render(request, 'cv_viewer.html', {
        'nombre': 'Bastián Arredondo',
        'usuario': 'just_seb03',
        'app_name': 'cvViewerSeb',
        'rol': 'Desarrollador Full Stack & Diseñador',
        'perfil_url': '/perfil/just_seb03/',
    })
