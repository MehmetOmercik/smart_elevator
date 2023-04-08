import pytest
from elevator.models import Elevator, SystemConfig


@pytest.fixture()
def elevator_model(db):
    return Elevator.objects.create(elevator_id=1, floor_request=1, current_floor=9)


class TestElevator:
    def test_system_config_exists(self, elevator_model):
        assert Elevator.objects.count() == 1

    def test_elevator_model_elevator_id(self, elevator_model):
        object = Elevator.objects.get(elevator_id=1)
        assert object.elevator_id == 1

    def test_elevator_model_floor_request(self, elevator_model):
        object = Elevator.objects.get(elevator_id=1)
        assert object.floor_request == 1

    def test_elevator_model_current_floor(self, elevator_model):
        object = Elevator.objects.get(elevator_id=1)
        assert object.current_floor == 9

    def test_elevator_model_create_object(self, db):
        object = Elevator.objects.create(
            elevator_id=2, floor_request=4, current_floor=4
        )
        assert object.elevator_id == 2

    def test_elevator_model_updated_floor_request(self, elevator_model):
        elevator_model.floor_request = 2
        elevator_model.save()
        assert Elevator.objects.get(elevator_id=elevator_model.id).floor_request == 2

    def test_elevator_model_updated_current_floor(self, elevator_model):
        elevator_model.current_floor = 1
        elevator_model.save()
        assert Elevator.objects.get(elevator_id=elevator_model.id).current_floor == 1


# No need for pytest fixture as system config automatically created
@pytest.mark.django_db
class TestSystemConfig:
    def test_system_config_already_exists(self):
        assert SystemConfig.objects.count() == 1

    def test_system_config_no_elevators(self):
        object = SystemConfig.objects.get(pk=1)
        assert object.no_elevators == 2

    def test_system_config_no_floors(self):
        object = SystemConfig.objects.get(pk=1)
        assert object.no_floors == 9

    def test_system_config_updated_elevators(self):
        object = SystemConfig.objects.get(pk=1)
        object.no_elevators = 6
        object.save()
        assert object.no_elevators == 6

    def test_system_config_updated_floors(self):
        object = SystemConfig.objects.get(pk=1)
        object.no_floors = 5
        object.save()
        assert object.no_floors == 5
