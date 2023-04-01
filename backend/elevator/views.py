from django.shortcuts import render
from rest_framework import generics
from .serializers import ElevatorSerializer, SystemConfigSerializer
from .models import Elevator, SystemConfig


class ElevatorListView(generics.ListCreateAPIView):
    serializer_class = ElevatorSerializer
    queryset = Elevator.objects.all()


class ElevatorRetrieveView(generics.RetrieveUpdateAPIView):
    serializer_class = ElevatorSerializer
    queryset = Elevator.objects.all()


class SystemConfigListView(generics.ListAPIView):
    serializer_class = SystemConfigSerializer
    queryset = SystemConfig.objects.all()


class SystemConfigUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = SystemConfigSerializer
    queryset = SystemConfig.objects.all()
