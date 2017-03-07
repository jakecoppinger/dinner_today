import csv

from pprint import pprint

# https://weeknumber.net/how-to/javascript


dinners = []




weekNum = 4

reader = csv.reader(open('week' + str(weekNum) + '.csv'))

result = {}
for row in reader:
    key = row[0].strip()
    #if key in result:
        # implement your duplicate row handling here
    #    pass

    meals = [meal.strip() for meal in row[1:]]

    result[key] = meals
#print result

result.pop("Breakfast")
result.pop("")


pprint(result)

