from django.urls import path
from .views import link_wallet

urlpatterns = [
    path('link_wallet', link_wallet , name='link_wallet')
]
