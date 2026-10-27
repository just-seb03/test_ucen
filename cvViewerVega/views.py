from django.shortcuts import render

def cv_view(request):
    return render(request, 'cv_viewer.html', {
        'nombre': 'Cristián Vega',
        'usuario': 'Cris5604',
        'app_name': 'cvViewerVega',
        'rol': 'Desarrollador de Software',
        'perfil_url': '/perfil/Cris5604/',
    })
