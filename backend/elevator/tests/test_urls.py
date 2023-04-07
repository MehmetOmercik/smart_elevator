import pytest
from django.urls import reverse
from django.http import HttpRequest
import requests


@pytest.mark.django_db
def test_elevator_url():
    url = "http://127.0.0.1:8000/elevator/"
    response = requests.get(url)
    print(f"Elevator status code: {response.status_code}")
    assert response.status_code == 200


@pytest.mark.django_db
def test_system_config_url():
    response = requests.get("http://127.0.0.1:8000/systemconfig/")
    print(f"System config status code: {response.status_code}")
    assert response.status_code == 200
