from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    ListCreateAPIView,
    RetrieveUpdateAPIView,
)
from .serializers import ElevatorSerializer, SystemConfigSerializer
from .models import Elevator, SystemConfig


class ElevatorListView(ListCreateAPIView):
    serializer_class = ElevatorSerializer
    queryset = Elevator.objects.all()


class ElevatorRetrieveView(RetrieveUpdateAPIView):
    serializer_class = ElevatorSerializer
    queryset = Elevator.objects.all()
    lookup_field = "elevator_id"


class SystemConfigListView(ListAPIView):
    serializer_class = SystemConfigSerializer
    queryset = SystemConfig.objects.all()


class SystemConfigUpdateView(RetrieveUpdateAPIView):
    serializer_class = SystemConfigSerializer
    queryset = SystemConfig.objects.all()
