"""Unit tests for cgm_core.version_utils."""

import sys
from pathlib import Path
from unittest.mock import Mock

import pytest

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))

from cgm_core.version_utils import get_latest_version  # noqa: E402


@pytest.mark.unit
class TestGetLatestVersion:
    """Validate latest-version selection and defensive handling."""

    def test_empty_dict_returns_none(self):
        assert get_latest_version({}) is None

    def test_non_semver_strings_use_fallback_sort(self):
        versions = {"alpha": {}, "beta": {}, "delta": {}}
        assert get_latest_version(versions) == "delta"

    def test_malformed_non_mapping_input_returns_none(self):
        assert get_latest_version(["1.0.0", "2.0.0"]) is None

    def test_malformed_mapping_like_object_returns_none(self):
        assert get_latest_version(Mock()) is None

    def test_semver_versions_return_latest(self):
        versions = {"1.2.0": {}, "1.10.0": {}, "1.3.0": {}}
        assert get_latest_version(versions) == "1.10.0"

    def test_mixed_semver_and_non_semver_handles_gracefully(self):
        versions = {"1.0.0": {}, "2.0.0": {}, "preview": {}}
        latest = get_latest_version(versions)
        assert latest in versions
