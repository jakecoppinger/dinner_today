#!/bin/bash
set -e

npm test

rm -rf dist/

mkdir dist/
mkdir dist/js
mkdir dist/css

cp index.html dist/
cp robots.txt dist/
cp CNAME dist/

cp -r data/ dist/
cp -r css/* dist/css/

echo "Running browserify..."
browserify js/view.js -o dist/js/bundle.js

cp js/vue.min.js dist/js


echo "Done!"



