import pytest
import requests


def test_elevator_url(db):
    url = "http://127.0.0.1:8000/elevator/"
    response = requests.get(url)
    print(f"Elevator url status code: {response.status_code}")
    assert response.status_code == 200


def test_system_config_url(db):
    response = requests.get("http://127.0.0.1:8000/systemconfig/")
    print(f"System url config status code: {response.status_code}")
    assert response.status_code == 200
