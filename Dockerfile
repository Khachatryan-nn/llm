FROM python:3.8.10-slim

WORKDIR /web

COPY . /web

RUN /usr/bin/local/python pip install --upgrade pip

RUN pip install -r app/requirements.txt
