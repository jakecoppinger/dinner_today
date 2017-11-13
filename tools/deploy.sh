#!/usr/bin/env bash
set -e

id="[dinnertoday.info deploy]"

echo $id "Building..."
npm run build

echo $id "Statically compiling..."
npm run freeze

echo $id "Removing .DS_Store..."
rm -f build/.DS_Store

echo $id "Removing previous deploy build..."
rm -rf ../dinnertoday.info-builds/*

echo $id "Copying new build..."
cp -r build/. ../dinnertoday.info-builds/

pushd ../dinnertoday.info-builds/

echo $id "Adding and commiting new files to deploy Git..."
git add -A
git commit -m "Automated build and commit @ $(date)"

echo $id "Pushing to master..."
git push -f origin master

echo ""
echo $id "Deploy completed!"
echo $id "View at https://dinnertoday.info/"

