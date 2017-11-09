var data = require("../data/data.json");
var DiningHall = require("./DiningHall.js");
var moment = require('moment');


const Vue = require('vue');
const compiler = require('vue-template-compiler');


var humanDate = function(m) {
    return m.format("MMMM") + " " + m.format("Do");
}

var main = function() {
    //var today = moment("2017-07-24 09:30");
    var today = moment();
    var tomorrow = moment().add(1, 'days');

    // Dinner finish time
    const dinnerEnd = {
        hours: 19,
        minutes: 15
    }

    // Check if dinner has finished
    var dinnerOver = false;
    if(today.hours() >= dinnerEnd.hours &&
        today.minutes() > dinnerEnd.minutes) {
        dinnerOver = true;
    }

    var dino = new DiningHall(data);

    var vueapp = new Vue({
        el: '#app',
        data: {
            humanDate: humanDate(today),
            mealsTodayData: dino.menuExistsOnDate(today),
            mealsTomorrowData: dino.menuExistsOnDate(tomorrow),
            mealsToday: dino.mealsOnDate(today),
            mealsTomorrow: dino.mealsOnDate(tomorrow),
            noMenu: !dino.menuExistsOnDate(today) && !dino.menuExistsOnDate(today),
            dinnerFinished: dinnerOver
        }
    });
};
main();