FROM python:3.8.10-slim

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        pkg-config \
        libcairo2-dev \
        build-essential \
        python3-apt \
        libsystemd-dev \
        libdbus-1-dev \
        libgirepository1.0-dev \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /web

# Copy application code
COPY . /web

# Upgrade pip and install Python dependencies
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r app/requirements.txt
