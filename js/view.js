require("../data/data.js");
var app = require("./app.js");
var moment = require('moment');


var getOrdinal = function(n) {
    var s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Generates string like "July 24th" from date object
var humanDateOld = function(d) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var dayOfMonth = d.getDate()
    return monthNames[d.getMonth()] + " " + getOrdinal(dayOfMonth)
}

var humanDate = function(m) {
    return m.format("MMMM") + " " + m.format("Do");
}


window.onload = function() {
    // new Date(); 
    var today = moment();
    var tomorrow = today.add(1, 'days');
    // var todayOld = new Date(); //parseISOLocal('2017-07-24T19:40:00');
    // var tomorrowOld = new Date(today);
    // tomorrowOld.setDate(tomorrowOld.getDate() + 1);

    var dino = new app.DiningHall(data);

    var vueapp = new Vue({
      el: '#app',
      data: {
        humanDate: humanDate(today),
        mealsTodayData:dino.menuExistsOnDate(today),
        mealsTomorrowData: dino.menuExistsOnDate(tomorrow),
        mealsToday: dino.mealsOnDate(today),
        mealsTomorrow: dino.mealsOnDate(tomorrow),
        noMenu: !dino.menuExistsOnDate(today) && !dino.menuExistsOnDate(today)
      }
    });
};