#!/usr/bin/env python

import csv
from pprint import pprint
import json

# Change this to data.json for pure JSON
json_filename = "data.js"

# This allows JavaScript to read the JSON as an object.
# Replace with empty string for pure JSON
json_prefix = "dinner_data = "

dinners = {}

for week in range(1,17):
    reader = csv.reader(open('data/week' + str(week) + '.csv'))

    result = {}
    for row in reader:
        key = row[0].strip()
        meals = [meal.strip() for meal in row[1:]]
        assert(len(meals) == 7)
        result[key] = meals

    result.pop("Breakfast")
    result.pop("")

    dinners[str(week)] = result


#pprint(dinners)
   
with open(json_filename, 'w') as outfile:
    outfile.write(json_prefix + json.dumps(dinners, sort_keys=True, 
        indent=4, separators=(',', ': ')))


print("Data written to " + json_filename + " with prefix '" + json_prefix +'')