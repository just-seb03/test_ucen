from django.urls import path
from .views import AlbumList, AlbumDetail

urlpatterns = [
    path('', AlbumList.as_view(), name='album_list_root'),
    path('albumes/', AlbumList.as_view(), name='album_list'),
    path('albumes/<int:pk>/', AlbumDetail.as_view(), name='album_detail'),
]
