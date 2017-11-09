#!/bin/bash
set -e

# export PATH="$PWD/node_modules/.bin:$PATH"

echo "Running browserify..."
browserify src/js/view.js -o static/js/bundle.js
