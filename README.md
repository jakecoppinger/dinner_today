Dinner Today
============

[![devDependencies Status](https://david-dm.org/jakecoppinger/dinnertoday.info/dev-status.svg)](https://david-dm.org/jakecoppinger/dinnertoday.info?type=dev)

>   A simple webapp for your college that answers one question well: What's for dinner?

Implemented for a college at an Australian university. I have not included the name as the webapp is unoffical.

# Development setup

This project uses:

- [Vue.js](https://vuejs.org/) for front-end rendering
- [Mocha](https://mochajs.org/) for unit tests
- [Webpack](https://webpack.js.org/) for combining scripts (through `require()`)

To get started make sure you have Node and npm installed:

### Debian/Ubuntu

`sudo apt-get update`

`sudo apt-get install nodejs`

`sudo apt-get install npm`

### macOS
Use [Homebrew](https://brew.sh/) to install npm.

``
brew install node
``

If you have any problems with the use of npm (*never* use sudo for npm) consult [this](https://gist.github.com/rcugut/c7abd2a425bb65da3c61d8341cd4b02d) guide.

### Install dependencies
This could take a while.

```
npm install
```

### Testing

```
npm run test
```

### Building

```
npm run build
```

After building simply open `dist/index.html` in your browser.

### Deploy
Only I can do this, but if you want to deploy somewhere else just change around the folders in the script.

```
npm run deploy
```

*Note:* There is a bug that if there are no changes npm reports `ERR! code ELIFECYCLE`. In this case just run `./deploy.sh`.

### Source notes

I have disallowed Robots (search engines) from indexing the site as it is not an offical univerity website.

## Input Data
I scraped the menu from a Powerpoint document and stored this raw data in CSV files in `src/raw_data/`. I wrote a Node program to read these csv files and output JSON.

To run the node script:

```
node csv-to-json.js
```

To save this data to the correct file:

```
./generate_data.sh
```

## Hosting notes & analytics
The site is hosted on [Github Pages](https://pages.github.com/), using CloudFlare's CDN to improve ping and add HTTPS support. [Heap Analytics](https://heapanalytics.com/) is used for anonymous usage analytics. 

# Author
Jake Coppinger  
[jakecoppinger.com](http://www.jakecoppinger.com)  
[jake@jakecoppinger.com](mailto:jake@jakecoppinger.com)
