#!/usr/bin/env python

import csv
from pprint import pprint
import json

json_filename = "dinner_data.json"

dinners = {}

for week in range(1,9):
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


pprint(dinners)
   
with open(json_filename, 'w') as outfile:
    outfile.write(json.dumps(dinners, sort_keys=True, 
        indent=4, separators=(',', ': ')))

print("///")
print("Data written to " + json_filename)