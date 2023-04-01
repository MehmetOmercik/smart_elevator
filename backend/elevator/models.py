from django.db import models


class Elevator(models.Model):
    floor_request = models.IntegerField()
    elevator_id = models.IntegerField()


# Create your models here.
