#!/bin/bash
set -e

id="[dinnertoday.info TEST deploy]"

echo $id "Building..."
npm run build

echo $id "Statically compiling..."
npm run freeze

echo $id "Removing CNAME..."
rm -f build/CNAME

echo $id "Creating CNAME with dinnertoday.info-test.surge.sh"
echo "dinnertoday.info-test.surge.sh" > build/CNAME

echo $id "Removing .DS_Store..."
rm -f build/.DS_Store

pushd build
echo $id "Running surge..."
surge
popd
echo $id "Done!"