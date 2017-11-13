#!/usr/bin/env bash
set -e

# export PATH="$PWD/node_modules/.bin:$PATH"

echo "Scraping dinner data..."
./tools/scraper.sh

echo "Running browserify..."
browserify --entry src/js/view.js --outfile static/js/bundle.js