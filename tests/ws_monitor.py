#!/usr/bin/env python3
"""Monitor ComfyUI WebSocket events."""

import asyncio
import json
import signal
from datetime import datetime

try:
    import websockets
except ImportError:
    print("Install websockets: pip install websockets")
    exit(1)


async def monitor():
    """Connect to ComfyUI WebSocket and log all events."""
    uri = "ws://127.0.0.1:8188/ws"
    event_counts = {}

    print(f"Connecting to {uri}...")
    print("Press Ctrl+C to stop\n")

    try:
        async with websockets.connect(uri) as ws:
            print("Connected! Waiting for events...\n")

            while True:
                msg = await ws.recv()
                data = json.loads(msg)
                event_type = data.get("type", "unknown")
                timestamp = datetime.now().strftime("%H:%M:%S.%f")[:-3]

                # Count events
                event_counts[event_type] = event_counts.get(event_type, 0) + 1

                # Print event
                print(f"[{timestamp}] {event_type}")

                # Print payload preview (truncated)
                if "data" in data:
                    preview = json.dumps(data["data"], default=str)
                    if len(preview) > 200:
                        preview = preview[:200] + "..."
                    print(f"  {preview}")

                print()

    except websockets.exceptions.ConnectionClosed:
        print("\nConnection closed")
    except KeyboardInterrupt:
        pass
    finally:
        print("\n=== Event Summary ===")
        for event, count in sorted(event_counts.items()):
            print(f"  {event}: {count}")


if __name__ == "__main__":
    asyncio.run(monitor())
