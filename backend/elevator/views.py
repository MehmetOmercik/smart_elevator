from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .serializers import ElevatorSerializer
from .models import Elevator


class ElevatorView(ListAPIView):
    serializer_class = ElevatorSerializer
    queryset = Elevator.objects.all()
