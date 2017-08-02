[DinnerToday.info](https://www.dinnertoday.info)
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

### Install dependencies with Yarn

Make sure you have yarn installed.

```
npm install -g yarn
```

```
yarn install
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



# License

**tl;dr:** The GNU GPLv3 is a copyleft license that requires anyone who distributes your code or a derivative work to make the source available under the same terms, and also provides an express grant of patent rights from contributors to users.

DinnerToday.info: A simple webapp that states the meal for your college  
Copyright (C) 2017 Jake Coppinger  

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
