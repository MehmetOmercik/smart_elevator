from django.db import models


class SystemConfig(models.Model):
    no_elevators = models.IntegerField(verbose_name="Number of Elevators", default=2)
    no_floors = models.IntegerField(verbose_name="Number of Floors", default=9)


class Elevator(models.Model):
    elevator_id = models.IntegerField(verbose_name="Elevator ID")
    floor_request = models.IntegerField(verbose_name="Floor Request", default=1)
    current_floor = models.IntegerField(
        verbose_name="Current Floor",
    )
