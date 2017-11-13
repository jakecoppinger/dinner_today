#!/bin/bash
set -e

# export PATH="$PWD/node_modules/.bin:$PATH"
NODE_ENV=production

echo "Scraping dinner data..."
./tools/scraper.sh

echo "Running browserify..."
browserify -g envify --entry src/js/view.js | ./node_modules/.bin/uglifyjs -c -m > static/js/bundle.js


#.js--outfile 

