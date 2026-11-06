from django.urls import path
from .views import AlbumList

urlpatterns = [
    path('', AlbumList.as_view(), name='album_list_root'),
    path('albumes/', AlbumList.as_view(), name='album_list'),
]
