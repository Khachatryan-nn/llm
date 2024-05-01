FROM python:3.8.10-slim

WORKDIR /web

COPY . /web

RUN pip3 install --upgrade pip3

RUN pip3 install -r app/requirements.txt
