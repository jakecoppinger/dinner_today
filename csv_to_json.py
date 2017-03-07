#!/usr/bin/env python
 
import csv
import sys
import pprint
import json



fieldnames = ['date','delta','vendor','balance']
reader = csv.DictReader(open(variables_file, 'rb'),fieldnames=fieldnames)
dict_list = []
for line in reader:
    dict_list.append(line)
dict_list.reverse()
return dict_list

    