import pytest
from elevator.serializers import ElevatorSerializer, SystemConfigSerializer
from elevator.models import Elevator, SystemConfig


@pytest.mark.django_db
class TestElevatorSerializers:
    def test_elevator_valid_data(self):
        data = {"elevator_id": 1, "floor_request": 1, "current_floor": 9}
        serializer = ElevatorSerializer(data=data)
        assert serializer.is_valid() == True

    def test_elevator_invalid_data(self):
        data = {"elevator_id": 1, "floor_request": 1}
        serializer = ElevatorSerializer(data=data)
        assert serializer.is_valid() == False

    def test_elevator_serializer_save_object(self):
        data = {"elevator_id": 1, "floor_request": 1, "current_floor": 9}
        serializer = ElevatorSerializer(data=data)
        assert serializer.is_valid() == True
        obj = serializer.save()
        assert isinstance(obj, Elevator) == True
        assert obj.elevator_id == data["elevator_id"]
        assert obj.floor_request == data["floor_request"]
        assert obj.current_floor == data["current_floor"]


@pytest.mark.django_db
class TestSystemConfigSerializers:
    def test_system_config_valid_data(self):
        data = {"no_elevators": 1, "no_floors": 1}
        serializer = SystemConfigSerializer(data=data)
        assert serializer.is_valid() == True

    def test_system_config_invalid_data(self):
        data = {"no_elevators": "hello"}
        serializer = SystemConfigSerializer(data=data)
        assert serializer.is_valid() == False

    def test_system_config_serializer_save_object(self):
        data = {"no_elevators": 1, "no_floors": 1}
        serializer = SystemConfigSerializer(data=data)
        assert serializer.is_valid() == True
        obj = serializer.save()
        assert isinstance(obj, SystemConfig) == True
        assert obj.no_elevators == data["no_elevators"]
        assert obj.no_floors == data["no_floors"]
