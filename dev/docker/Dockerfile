ARG BASE_IMAGE=nvidia/cuda:12.6.3-cudnn-runtime-ubuntu24.04
ARG BLENDER_VERSION=4.0.2
FROM ${BASE_IMAGE}
ARG BLENDER_VERSION

ENV DEBIAN_FRONTEND=noninteractive
ENV PIP_PREFER_BINARY=1
ENV PYTHONUNBUFFERED=1

# EGL acceleration for headless GPU-backed rendering paths such as ShaderFlow.
# This image is NVIDIA/CUDA based; AMD/Intel images should provide their own
# vendor ICD configuration instead of the NVIDIA JSON below.
ENV NVIDIA_DRIVER_CAPABILITIES=all
ENV NVIDIA_VISIBLE_DEVICES=all
ENV MESA_D3D12_DEFAULT_ADAPTER_NAME=NVIDIA
ENV LD_LIBRARY_PATH="/usr/lib/wsl/lib:/usr/local/nvidia/lib:/usr/local/nvidia/lib64"
ENV WINDOW_BACKEND=headless

RUN sed -i 's|http://archive.ubuntu.com/ubuntu/|https://archive.ubuntu.com/ubuntu/|g; s|http://security.ubuntu.com/ubuntu/|https://security.ubuntu.com/ubuntu/|g' /etc/apt/sources.list.d/ubuntu.sources

RUN apt-get update -o Acquire::Retries=10 && apt-get install -y \
    -o Acquire::Retries=10 \
    ca-certificates \
    curl \
    ffmpeg \
    git \
    git-lfs \
    libegl1 \
    libegl1-mesa-dev \
    libgl1 \
    libglib2.0-0 \
    libglx0 \
    libglvnd-dev \
    libglvnd0 \
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

RUN mkdir -p /usr/share/glvnd/egl_vendor.d \
    && printf '%s\n' '{"file_format_version":"1.0.0","ICD":{"library_path":"libEGL_nvidia.so.0"}}' \
      > /usr/share/glvnd/egl_vendor.d/10_nvidia.json

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
