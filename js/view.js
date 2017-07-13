require("../data/data.js");

console.log(data);
var app = require("./app.js");

console.log(app);

window.onload = function() {
    // new Date(); 
    var today = new Date(); //parseISOLocal('2017-07-24T19:40:00');
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    var dino = new app.Dino(data);

    var vueapp = new Vue({
      el: '#app',
      data: {
        humanDate: app.generateHumanDate(today),
        mealsTodayData:dino.menuExistsOnDate(today),
        mealsTomorrowData: dino.menuExistsOnDate(tomorrow),
        mealsToday: dino.mealsOnDate(today),
        mealsTomorrow: dino.mealsOnDate(tomorrow),
        noMenu: !dino.menuExistsOnDate(today) && !dino.menuExistsOnDate(today)
      }
    });

    // var mealsToday = mealsForDate(data,today);
    // var mealsTomorrow = mealsForDate(data,tomorrow);

    // if(mealsToday) {
    //     console.log(prettyJSON(mealsForDate(data,today)));
    // } else {
    //     console.log("No menu today.");
    // }

    // if(mealsTomorrow) {
    //     console.log(prettyJSON(mealsForDate(data,tomorrow)));
    // } else {
    //     console.log("No menu tomorrow.");
    // }
};