from django.urls import path
from . import views

urlpatterns = [
    path('', views.profile_view, name='profile_seb'),
    path('cv/', views.cv_view, name='cv_seb_detail'),
]
