var data = require("../data/data.json");
var DiningHall = require("./DiningHall.js");
var moment = require('moment');

var humanDate = function(m) {
    return m.format("MMMM") + " " + m.format("Do");
}

var main = function() {
    //var today = moment("2017-07-24 09:30");
    var today = moment();
    var tomorrow = today.add(1, 'days');
    var dino = new DiningHall(data);

    var vueapp = new Vue({
        el: '#app',
        data: {
            humanDate: humanDate(today),
            mealsTodayData: dino.menuExistsOnDate(today),
            mealsTomorrowData: dino.menuExistsOnDate(tomorrow),
            mealsToday: dino.mealsOnDate(today),
            mealsTomorrow: dino.mealsOnDate(tomorrow),
            noMenu: !dino.menuExistsOnDate(today) && !dino.menuExistsOnDate(today)
        }
    });
};
main();