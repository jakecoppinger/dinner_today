require("../data/data.js");
var app = require("../js/app.js");

var today = app.parseISOLocal('2017-07-24T19:40:00');

var mealsToday = app.mealsForDate(data,today);

console.log(mealsToday.Vegetarian == 'Polenta & Vegetable Stacks With Marinated Tofu');
