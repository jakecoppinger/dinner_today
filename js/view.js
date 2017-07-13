window.onload = function() {
    // new Date(); 
    var today = new Date(); //parseISOLocal('2017-07-24T19:40:00');
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    var app = new Vue({
      el: '#app',
      data: {
        humanDate: generateHumanDate(today),
        mealsTodayData:menuExistsForDate(data,today),
        mealsTomorrowData: menuExistsForDate(data,tomorrow),
        mealsToday: mealsForDate(data,today),
        mealsTomorrow: mealsForDate(data,tomorrow),
        noMenu: !menuExistsForDate(data,today) && !menuExistsForDate(data,today)
      }
    });

    var mealsToday = mealsForDate(data,today);
    var mealsTomorrow = mealsForDate(data,tomorrow);

    if(mealsToday) {
        console.log(prettyJSON(mealsForDate(data,today)));
    } else {
        console.log("No menu today.");
    }

    if(mealsTomorrow) {
        console.log(prettyJSON(mealsForDate(data,tomorrow)));
    } else {
        console.log("No menu tomorrow.");
    }
};