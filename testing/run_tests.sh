#!/bin/bash
# Test runner script for ComfyGit Manager orchestrator tests

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== ComfyGit Manager Test Suite ===${NC}\n"

# Check if pytest is installed
if ! command -v pytest &> /dev/null; then
    echo -e "${RED}pytest not found. Installing dependencies...${NC}"
    pip install -e . -q
fi

# Parse arguments
COVERAGE=false
VERBOSE=false
FAST=false
TARGET=""

while [[ $# -gt 0 ]]; do
    case $1 in
        --cov|--coverage)
            COVERAGE=true
            shift
            ;;
        -v|--verbose)
            VERBOSE=true
            shift
            ;;
        --fast)
            FAST=true
            shift
            ;;
        --unit)
            TARGET="unit/"
            shift
            ;;
        --integration)
            TARGET="integration/"
            shift
            ;;
        *)
            TARGET="$1"
            shift
            ;;
    esac
done

# Build pytest command
PYTEST_CMD="pytest"

if [ "$VERBOSE" = true ]; then
    PYTEST_CMD="$PYTEST_CMD -v"
fi

if [ "$COVERAGE" = true ]; then
    PYTEST_CMD="$PYTEST_CMD --cov --cov-report=term-missing --cov-report=html"
fi

if [ "$FAST" = true ]; then
    PYTEST_CMD="$PYTEST_CMD -m 'not slow'"
fi

if [ -n "$TARGET" ]; then
    PYTEST_CMD="$PYTEST_CMD $TARGET"
fi

echo -e "${YELLOW}Running: $PYTEST_CMD${NC}\n"

# Run tests
$PYTEST_CMD

# Show results
if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}✓ All tests passed!${NC}"

    if [ "$COVERAGE" = true ]; then
        echo -e "${YELLOW}Coverage report: htmlcov/index.html${NC}"
    fi
else
    echo -e "\n${RED}✗ Tests failed${NC}"
    exit 1
fi
