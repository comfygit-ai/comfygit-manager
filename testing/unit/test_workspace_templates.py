"""Tests for workspace template fixtures."""

from __future__ import annotations

from pathlib import Path
import tarfile


REPO_ROOT = Path(__file__).resolve().parents[2]
TEMPLATE_DIR = REPO_ROOT / "testing" / "fixtures" / "templates"


TEMPLATE_FILES = {
    "minimal.tar.gz": {
        "pyproject.toml",
        "environments/dev/.cec",
        "environments/dev/ComfyUI/main.py",
    },
    "with-remotes.tar.gz": {
        "pyproject.toml",
        "environments/dev/.cec",
        "environments/dev/ComfyUI/main.py",
        ".git/HEAD",
        ".git/config",
    },
    "with-uncommitted.tar.gz": {
        "pyproject.toml",
        "environments/dev/.cec",
        "environments/dev/ComfyUI/main.py",
        "uncommitted.txt",
    },
    "with-workflows.tar.gz": {
        "pyproject.toml",
        "environments/dev/.cec",
        "environments/dev/ComfyUI/main.py",
        "workflows/valid.json",
        "workflows/broken.json",
    },
    "multi-env.tar.gz": {
        "pyproject.toml",
        "environments/dev/.cec",
        "environments/staging/.cec",
        "environments/prod/.cec",
        "environments/dev/ComfyUI/main.py",
        "environments/staging/ComfyUI/main.py",
        "environments/prod/ComfyUI/main.py",
    },
    "first-time.tar.gz": set(),
}


def read_tar_text(tar: tarfile.TarFile, name: str) -> str:
    """Read a text file from a tarball."""
    member = tar.getmember(name)
    extracted = tar.extractfile(member)
    assert extracted is not None
    return extracted.read().decode("utf-8")


def test_template_tarballs_exist():
    """All workspace template tarballs should exist."""
    assert TEMPLATE_DIR.exists()
    for template in TEMPLATE_FILES:
        assert (TEMPLATE_DIR / template).exists()


def test_template_tarball_contents():
    """Template tarballs should contain expected workspace structure."""
    for template, expected_files in TEMPLATE_FILES.items():
        template_path = TEMPLATE_DIR / template
        with tarfile.open(template_path, "r:gz") as tar:
            members = {member.name for member in tar.getmembers()}
        assert expected_files.issubset(members)


def test_minimal_template_pyproject():
    """Minimal template should list a single dev environment."""
    template_path = TEMPLATE_DIR / "minimal.tar.gz"
    with tarfile.open(template_path, "r:gz") as tar:
        pyproject = read_tar_text(tar, "pyproject.toml")
    assert 'environments = ["dev"]' in pyproject


def test_multi_env_template_pyproject():
    """Multi-env template should include dev, staging, prod environments."""
    template_path = TEMPLATE_DIR / "multi-env.tar.gz"
    with tarfile.open(template_path, "r:gz") as tar:
        pyproject = read_tar_text(tar, "pyproject.toml")
    assert 'environments = ["dev", "staging", "prod"]' in pyproject


def test_with_remotes_template_config():
    """Remotes template should include origin and upstream remotes."""
    template_path = TEMPLATE_DIR / "with-remotes.tar.gz"
    with tarfile.open(template_path, "r:gz") as tar:
        config = read_tar_text(tar, ".git/config")
    assert '[remote "origin"]' in config
    assert '[remote "upstream"]' in config


def test_with_uncommitted_template_marker():
    """Uncommitted template should include a dirty marker file."""
    template_path = TEMPLATE_DIR / "with-uncommitted.tar.gz"
    with tarfile.open(template_path, "r:gz") as tar:
        marker = read_tar_text(tar, "uncommitted.txt")
    assert "uncommitted" in marker.lower()


def test_first_time_template_empty():
    """First-time template should be empty."""
    template_path = TEMPLATE_DIR / "first-time.tar.gz"
    with tarfile.open(template_path, "r:gz") as tar:
        assert tar.getmembers() == []
