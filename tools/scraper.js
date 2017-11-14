const fs = require('fs');
var moment = require('moment');


const rawData = fs.readFileSync('./tools/scraped-data.txt', 'utf8')
const lines = rawData.split("\n");

const Dinner = lines[0];
const Vegetarian = lines[1];
const Vegetables = lines[2];


const week = moment().isoWeek();

const data = {
    "2017": {
        [week]: {
            [moment().format('dddd')] : {
                Dinner,
                Vegetarian,
                Vegetables: [Vegetables]
            }
        }
    }
}

console.log(JSON.stringify(data,null,2));