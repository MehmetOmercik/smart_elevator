FROM python:3.11.2-slim-buster

WORKDIR /app
COPY ./requirements.txt /app
COPY . /app
EXPOSE 8000

RUN pip install --no-cache-dir -r requirements.txt 
