"""Async helper utilities for running synchronous code in executor."""
import asyncio
from typing import Callable, TypeVar, ParamSpec

P = ParamSpec('P')
T = TypeVar('T')


async def run_sync(func: Callable[P, T], *args: P.args, **kwargs: P.kwargs) -> T:
    """
    Run synchronous function in executor with proper typing.

    Example:
        result = await run_sync(env.status)
        nodes = await run_sync(env.list_nodes)
        await run_sync(env.add_node, "package-id", force=True)
    """
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, lambda: func(*args, **kwargs))
