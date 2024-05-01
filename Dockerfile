FROM python:3.8.10-slim

WORKDIR /web

COPY . /web

RUN pip install -r app/requirements.txt
