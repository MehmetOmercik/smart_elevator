from django.urls import path
from . import views

urlpatterns = [
    path("elevator/", views.ElevatorListView.as_view(), name="elevator"),
    path(
        "elevator/<int:elevator_id>/",
        views.ElevatorRetrieveView.as_view(),
        name="elevator-update",
    ),
    path("systemconfig/", views.SystemConfigListView.as_view(), name="systemconfig"),
    path(
        "systemconfig/<int:pk>/",
        views.SystemConfigUpdateView.as_view(),
        name="systemconfig-update",
    ),
]
