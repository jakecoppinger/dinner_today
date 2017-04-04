Dinner Today
============

>   A simple webapp for your college that answers one question well: What's for dinner?

Implemented for a college at an Australian university. I have not included the name as the webapp is unoffical.

# Development
After you clone the source it's very easy to test out - the webapp is a simple static `index.html` page. Simply open this file in your browser for development.

The JavaScript for looking up data for the current day is in `script.js`, and CSS styles are in `styles.css`. I have disallowed Robots (search engines) from indexing the site as it is not an offical univeristy website.

## Input Data
I scraped the menu from a PDF document and stored this raw data in CSV files in `data/`. I wrote a Python program to read these csv files and store all the essential information in `dinner_data.json`. You can run this script with `./csv_to_json.py`.

# Author
Jake Coppinger  
[jakecoppinger.com](http://www.jakecoppinger.com)  
[jake@jakecoppinger.com](mailto:jake@jakecoppinger.com)