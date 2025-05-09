#!/usr/bin/env python3
"""
Write a type-annotated function floor
takes a float @n as arg and returns
the floor of the float.
"""


def floor(n: float) -> int:
    """type-annotated function floor"""
    if n < 0:
        n = n * -1
    return int(n)
