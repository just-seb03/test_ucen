from django.shortcuts import render

def cv_view(request):
    return render(request, 'cv_viewer.html', {
        'nombre': 'Martín Cantuarias',
        'usuario': 'MCantuarias',
        'app_name': 'cvViewerMasi',
        'rol': 'Desarrollador de Software',
        'perfil_url': '/perfil/MCantuarias/',
    })
