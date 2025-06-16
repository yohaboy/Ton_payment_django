from django.urls import path
from .views import link_wallet ,csrf

urlpatterns = [
    path('link_wallet', link_wallet , name='link_wallet'),
    path('csrf', csrf , name="csrf")
]
