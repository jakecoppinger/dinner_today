Dinner Today
============

>   A simple webapp for your college that answers one question well: What's for dinner?

Implemented for a college at an Australian university. I have not included the name as the webapp is unoffical.

# Development
After you clone the source it's very easy to test out - the webapp is a simple static `index.html` page. Simply open this file in your browser for development.

[Vue.js](https://vuejs.org/) is used as a front end templating engine, greatly simplifying binding the data to the DOM. The JavaScript code for starting Vue.js is in `js/app.js`. CSS styles are in `css/styles.css`. I have disallowed Robots (search engines) from indexing the site as it is not an offical univerity website.

## Input Data
I scraped the menu from a Powerpoint document and stored this raw data in CSV files in `raw_data/`. I wrote a Node program to read these csv files and output beautiful JSON.

To install the NPM dependencies:

```
npm install
```

To run the node script:

```
node csv-to-json.js
```

To save this data to a file and prepend a variable name, run

```
./generate_data.sh
```

This is not pure JSON as it adds a variable at the start so JavaScript can read it as an object.

## Hosting notes & analytics
The site is hosted on [Github Pages](https://pages.github.com/), using CloudFlare's CDN to improve ping and add HTTPS support. [Heap Analytics](https://heapanalytics.com/) is used for anonymous usage analytics. 

# Author
Jake Coppinger  
[jakecoppinger.com](http://www.jakecoppinger.com)  
[jake@jakecoppinger.com](mailto:jake@jakecoppinger.com)