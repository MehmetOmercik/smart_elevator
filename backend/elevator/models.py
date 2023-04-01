from django.db import models


class SystemConfig(models.Model):
    no_elevators = models.IntegerField(verbose_name="Number of Elevators", default=2)
    no_floors = models.IntegerField(verbose_name="Number of Floors", default=9)


class Elevator(models.Model):
    floor_request = models.IntegerField(verbose_name="Floor Request", default=1)
