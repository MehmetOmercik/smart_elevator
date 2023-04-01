from django.urls import path
from .views import ElevatorView

urlpatterns = [
    path("", ElevatorView.as_view(), name=""),
]
