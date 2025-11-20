#!/usr/bin/env python3
"""Discover and document ComfyUI API endpoints."""

import aiohttp
import asyncio
import json
from pathlib import Path

COMFYUI_URL = "http://127.0.0.1:8188"
OUTPUT_DIR = Path(__file__).parent / "output"


async def probe_endpoint(session: aiohttp.ClientSession, method: str, path: str) -> dict:
    """Probe a single endpoint and return result."""
    try:
        async with session.request(method, f"{COMFYUI_URL}{path}", timeout=5) as resp:
            result = {"status": resp.status, "path": path, "method": method}
            if resp.status == 200:
                try:
                    data = await resp.json()
                    result["data"] = data
                    result["type"] = type(data).__name__
                except:
                    result["data"] = await resp.text()
                    result["type"] = "text"
            return result
    except Exception as e:
        return {"status": "error", "path": path, "method": method, "error": str(e)}


async def discover():
    """Probe all known/suspected ComfyUI endpoints."""
    OUTPUT_DIR.mkdir(exist_ok=True)

    endpoints = [
        # Core ComfyUI
        ("GET", "/system_stats"),
        ("GET", "/feature_flags"),
        ("GET", "/object_info"),
        ("GET", "/queue"),
        ("GET", "/history"),
        ("GET", "/extensions"),
        ("GET", "/settings"),
        ("GET", "/prompt"),
        ("GET", "/embeddings"),

        # ComfyGit Manager v2
        ("GET", "/v2/customnode/installed"),
        ("GET", "/v2/manager/queue/status"),
        ("GET", "/v2/manager/is_legacy_manager_ui"),
        ("GET", "/v2/debug/comfyui_info"),
    ]

    results = []
    async with aiohttp.ClientSession() as session:
        tasks = [probe_endpoint(session, m, p) for m, p in endpoints]
        results = await asyncio.gather(*tasks)

    # Print summary
    print("\n=== API Discovery Results ===\n")
    for r in results:
        status = r["status"]
        icon = "✓" if status == 200 else "✗"
        print(f"{icon} {r['method']} {r['path']}: {status}")

        # Save successful responses
        if status == 200 and "data" in r:
            filename = r["path"].replace("/", "_").strip("_") + ".json"
            filepath = OUTPUT_DIR / filename
            with open(filepath, "w") as f:
                json.dump(r["data"], f, indent=2, default=str)
            print(f"  → Saved to {filepath.name}")

    # Save full results
    with open(OUTPUT_DIR / "_all_results.json", "w") as f:
        json.dump(results, f, indent=2, default=str)

    print(f"\nResults saved to {OUTPUT_DIR}/")


if __name__ == "__main__":
    asyncio.run(discover())
