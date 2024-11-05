#!/bin/bash

# Set error handling
set -e  # Exit on error
set -u  # Exit on undefined variable
set -o pipefail  # Exit if any command in a pipe fails

# Function to log errors
log_error() {
    echo "ERROR: $1" >&2
}

# Check if a package name argument is provided
if [ -z "$1" ]; then
    log_error "Please provide a package name as an argument."
    exit 1
fi

if [ -z "$2" ]; then
    log_error "Please provide a comparison branch as an argument."
    exit 1
fi

# Store the package name argument
package_name=$1
comparison_branch=$2

# Run Turbo with --dry-run and capture the output
if ! output=$(pnpm turbo run lint --filter="...[$comparison_branch]" --dry-run 2>&1); then
    log_error "Failed to run turbo command: $output"
    exit 1
fi

# Check if output is empty
if [ -z "$output" ]; then
    log_error "Turbo command produced no output"
    exit 1
fi

# Check if the specified package name appears in the output
if echo "$output" | grep -q -E "^$package_name(\s|#)"; then
    echo "true"
else
    echo "false"
fi
