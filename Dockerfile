FROM python:3.8.10-slim

WORKDIR /web

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Copy application code
COPY . /web

# Upgrade pip and install Python dependencies
RUN pip install --upgrade pip \
    && pip install -r app/requirements.txt
