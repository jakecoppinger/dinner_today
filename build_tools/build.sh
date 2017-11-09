#!/bin/bash
set -e

# export PATH="$PWD/node_modules/.bin:$PATH"

# rm -rf dist/

# mkdir dist/
# mkdir dist/js
# mkdir dist/css

# cp src/*.html dist/
# cp src/robots.txt dist/
# cp src/CNAME dist/

# cp -r src/data dist/
# cp -r src/css/* dist/css/
# cp -r src/fonts dist/

echo "Running browserify..."
browserify src/js/view.js -o src/js/bundle.js
