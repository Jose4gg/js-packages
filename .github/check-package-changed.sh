#!/bin/bash

# Check if a package name argument is provided
if [ -z "$1" ]; then
  echo "Please provide a package name as an argument."
  exit 1
fi

if [ -z "$2" ]; then
  echo "Please provide a comparison branch as an argument."
  exit 1
fi


# Store the package name argument
package_name=$1
comparison_branch=$2
# Run Turbo with --dry-run and capture the output
output=$(pnpm turbo run lint --filter="...[$comparison_branch]" --dry-run)

# Check if the specified package name appears in the output
if echo "$output" | grep -q -E "^$package_name(\s|#)"; then
  echo "true"
else
  echo "false"
fi
