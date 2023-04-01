from rest_framework import serializers
from .models import Elevator, SystemConfig


class SystemConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemConfig
        fields = "__all__"


class ElevatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Elevator
        fields = "__all__"
