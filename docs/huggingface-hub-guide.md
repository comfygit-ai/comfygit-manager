# HuggingFace Hub Python Library - Quick Reference

Concise guide for finding, downloading, and authenticating with HuggingFace Hub.

## Installation

```bash
pip install huggingface_hub
# or
uv add huggingface_hub
```

## Authentication

### Methods (choose one)

```python
# 1. Environment variable (recommended for scripts)
# Set HF_TOKEN=hf_xxx in environment

# 2. Login once (persists token to ~/.cache/huggingface/token)
from huggingface_hub import login
login(token="hf_xxx")  # or login() for interactive prompt

# 3. Pass token directly to functions
hf_hub_download(..., token="hf_xxx")

# 4. HfApi client with token
from huggingface_hub import HfApi
api = HfApi(token="hf_xxx")
```

### Token precedence
1. Explicit `token=` parameter
2. `HF_TOKEN` environment variable
3. Stored token at `~/.cache/huggingface/token`

### Other auth functions
```python
from huggingface_hub import logout, auth_switch, auth_list
logout()                    # Remove stored token
auth_list()                 # List stored tokens
auth_switch("token_name")   # Switch between tokens
```

## Finding Models

### List models with filters

```python
from huggingface_hub import list_models, HfApi

# Basic listing
models = list_models()

# With filters
models = list_models(
    filter="text-generation",           # Task/tag filter
    author="meta-llama",                # Filter by author
    search="llama",                     # Search in name
    library_name="transformers",        # Filter by library
    pipeline_tag="text-generation",     # Filter by pipeline
    sort="downloads",                   # Sort: downloads, likes, trending_score, created_at
    limit=10,                           # Max results
    token="hf_xxx",                     # For private models
)

# Iterate results
for model in models:
    print(f"{model.id}: {model.downloads} downloads")
```

### Get model info

```python
from huggingface_hub import model_info

info = model_info("meta-llama/Llama-2-7b", token="hf_xxx")
print(info.id, info.sha, info.downloads, info.pipeline_tag)
print(info.siblings)  # List of files in repo
```

### Check if model/file exists

```python
from huggingface_hub import repo_exists, file_exists

repo_exists("meta-llama/Llama-2-7b")                    # True/False
file_exists("meta-llama/Llama-2-7b", "config.json")     # True/False
```

### List files in repo

```python
from huggingface_hub import list_repo_files

files = list_repo_files("meta-llama/Llama-2-7b", token="hf_xxx")
```

## Downloading

### Download single file

```python
from huggingface_hub import hf_hub_download

# To cache (default: ~/.cache/huggingface/hub)
path = hf_hub_download(
    repo_id="meta-llama/Llama-2-7b",
    filename="config.json",
    token="hf_xxx",
)

# To specific folder (replicates repo structure)
path = hf_hub_download(
    repo_id="meta-llama/Llama-2-7b",
    filename="config.json",
    local_dir="/path/to/models/llama2",  # Key param!
    token="hf_xxx",
)

# File in subfolder
path = hf_hub_download(
    repo_id="stabilityai/stable-diffusion-xl-base-1.0",
    filename="model_index.json",
    subfolder="scheduler",
    local_dir="/models/sdxl",
)

# Specific revision (branch, tag, or commit hash)
path = hf_hub_download(
    repo_id="meta-llama/Llama-2-7b",
    filename="config.json",
    revision="main",  # or "v1.0" or commit hash
)

# Force re-download
path = hf_hub_download(..., force_download=True)

# Use only cached files (offline mode)
path = hf_hub_download(..., local_files_only=True)
```

### Download entire repo (snapshot)

```python
from huggingface_hub import snapshot_download

# To cache
path = snapshot_download(
    repo_id="meta-llama/Llama-2-7b",
    token="hf_xxx",
)

# To specific folder
path = snapshot_download(
    repo_id="meta-llama/Llama-2-7b",
    local_dir="/path/to/models/llama2",  # Key param!
    token="hf_xxx",
)

# Filter files with patterns (glob syntax)
path = snapshot_download(
    repo_id="meta-llama/Llama-2-7b",
    allow_patterns=["*.safetensors", "*.json"],  # Only these
    ignore_patterns=["*.bin", "*.h5"],           # Skip these
    local_dir="/models/llama2",
)

# Download specific revision
path = snapshot_download(
    repo_id="meta-llama/Llama-2-7b",
    revision="main",
    local_dir="/models/llama2",
)

# Parallel downloads (default: 8 workers)
path = snapshot_download(..., max_workers=16)
```

### Dry run (check what would download)

```python
# Single file
info = hf_hub_download(
    repo_id="meta-llama/Llama-2-7b",
    filename="config.json",
    dry_run=True,
)
print(info.file_size, info.is_cached, info.will_download)

# Full repo
infos = snapshot_download(
    repo_id="meta-llama/Llama-2-7b",
    dry_run=True,
)
for info in infos:
    print(f"{info.filename}: {info.file_size} bytes, cached={info.is_cached}")
```

## Download Locations

### Key parameters

| Parameter | Behavior |
|-----------|----------|
| `local_dir` | Download to this folder, replicating repo structure. Creates `.cache/huggingface/` inside for metadata. |
| `cache_dir` | Use this as cache location instead of default. Files stored with content-addressed naming. |
| (neither) | Uses default cache: `~/.cache/huggingface/hub` |

### Environment variables

```bash
HF_HOME=~/.cache/huggingface           # Base dir for all HF data
HF_HUB_CACHE=$HF_HOME/hub              # Where repos are cached
HF_TOKEN=hf_xxx                        # Auth token
HF_HUB_OFFLINE=1                       # Force offline mode
HF_HUB_DISABLE_PROGRESS_BARS=1         # No progress bars
```

## Repo Types

For datasets or spaces, add `repo_type`:

```python
# Download dataset
snapshot_download(
    repo_id="squad",
    repo_type="dataset",
    local_dir="/data/squad",
)

# Download space
snapshot_download(
    repo_id="gradio/hello_world",
    repo_type="space",
    local_dir="/spaces/hello",
)

# List datasets
list_datasets(filter="text-classification")

# Dataset info
dataset_info("squad")
```

## HfApi Client

For multiple operations, use the client:

```python
from huggingface_hub import HfApi

api = HfApi(token="hf_xxx")

# All methods available
api.list_models(author="meta-llama")
api.model_info("meta-llama/Llama-2-7b")
api.hf_hub_download(...)
api.snapshot_download(...)
api.list_repo_files(...)
api.repo_exists(...)
api.file_exists(...)
api.whoami()  # Get current user info
```

## Common Patterns

### Download model to specific folder

```python
from huggingface_hub import snapshot_download
import os

def download_model(repo_id: str, dest_dir: str, token: str = None):
    """Download a model to a specific directory."""
    return snapshot_download(
        repo_id=repo_id,
        local_dir=dest_dir,
        token=token or os.getenv("HF_TOKEN"),
        allow_patterns=["*.safetensors", "*.json", "*.txt"],
        ignore_patterns=["*.bin", "*.h5", "*.ckpt"],
    )

# Usage
path = download_model("meta-llama/Llama-2-7b", "/models/llama2")
```

### Check size before downloading

```python
from huggingface_hub import snapshot_download

infos = snapshot_download(
    repo_id="meta-llama/Llama-2-7b",
    dry_run=True,
    allow_patterns=["*.safetensors"],
)
total_size = sum(f.file_size for f in infos if f.will_download)
print(f"Will download: {total_size / 1e9:.2f} GB")
```

### Download with progress callback

```python
from huggingface_hub import snapshot_download
from tqdm import tqdm

class CustomTqdm(tqdm):
    def __init__(self, *args, **kwargs):
        kwargs.setdefault('unit', 'B')
        kwargs.setdefault('unit_scale', True)
        super().__init__(*args, **kwargs)

path = snapshot_download(
    repo_id="meta-llama/Llama-2-7b",
    local_dir="/models/llama2",
    tqdm_class=CustomTqdm,
)
```

## Error Handling

```python
from huggingface_hub import hf_hub_download
from huggingface_hub.errors import (
    RepositoryNotFoundError,
    RevisionNotFoundError,
    EntryNotFoundError,
    GatedRepoError,
)

try:
    path = hf_hub_download("meta-llama/Llama-2-7b", "config.json")
except RepositoryNotFoundError:
    print("Repo doesn't exist or is private")
except GatedRepoError:
    print("Need to accept license at huggingface.co")
except RevisionNotFoundError:
    print("Branch/tag/commit not found")
except EntryNotFoundError:
    print("File not found in repo")
```

## Gated Models

Some models require accepting terms on the website first:

1. Go to model page (e.g., https://huggingface.co/meta-llama/Llama-2-7b)
2. Accept the license/terms
3. Download with authenticated token

```python
# After accepting terms on website
path = hf_hub_download(
    repo_id="meta-llama/Llama-2-7b",
    filename="config.json",
    token="hf_xxx",  # Required for gated models
)
```
