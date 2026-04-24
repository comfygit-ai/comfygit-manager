ARG BASE_IMAGE=nvidia/cuda:12.6.3-cudnn-runtime-ubuntu24.04
ARG BLENDER_VERSION=4.0.2
FROM ${BASE_IMAGE}
ARG BLENDER_VERSION

ENV DEBIAN_FRONTEND=noninteractive
ENV PIP_PREFER_BINARY=1
ENV PYTHONUNBUFFERED=1

RUN sed -i 's|http://archive.ubuntu.com/ubuntu/|https://archive.ubuntu.com/ubuntu/|g; s|http://security.ubuntu.com/ubuntu/|https://security.ubuntu.com/ubuntu/|g' /etc/apt/sources.list.d/ubuntu.sources

RUN apt-get update -o Acquire::Retries=10 && apt-get install -y \
    -o Acquire::Retries=10 \
    ca-certificates \
    curl \
    ffmpeg \
    git \
    git-lfs \
    libgl1 \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender1 \
    openssh-client \
    python3-numpy \
    python3.12 \
    python3.12-dev \
    python3.12-venv \
    wget \
    xz-utils \
    && ln -sf /usr/bin/python3.12 /usr/bin/python \
    && ln -sf /usr/bin/python3.12 /usr/bin/python3 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://download.blender.org/release/Blender4.0/blender-${BLENDER_VERSION}-linux-x64.tar.xz -o blender-${BLENDER_VERSION}-linux-x64.tar.xz \
    && mkdir -p /opt/blender \
    && tar -xf blender-${BLENDER_VERSION}-linux-x64.tar.xz -C /opt/blender --strip-components=1 \
    && rm blender-${BLENDER_VERSION}-linux-x64.tar.xz \
    && ln -sf /opt/blender/blender /usr/local/bin/blender

RUN wget -qO- https://astral.sh/uv/install.sh | sh \
    && ln -sf /root/.local/bin/uv /usr/local/bin/uv \
    && ln -sf /root/.local/bin/uvx /usr/local/bin/uvx

RUN uv venv /opt/venv
ENV PATH="/opt/venv/bin:${PATH}"
ENV VIRTUAL_ENV="/opt/venv"

COPY dev/docker/start-stack.sh /usr/local/bin/comfygit-manager-dev-start
RUN chmod +x /usr/local/bin/comfygit-manager-dev-start

CMD ["/usr/local/bin/comfygit-manager-dev-start"]
