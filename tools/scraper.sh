#!/usr/bin/env bash

data=`curl -s http://whatsfordino.today/ | grep -E "(<td >|<td>)" | sed -E "s/.*<td {0,1}>//g" | sed -E "s/<.*//g"`

echo "$data" > tools/scraped-data.txt


node tools/scraper.js > src/data/data.json

rm tools/scraped-data.txt