function prettyJSON(o) {
    return JSON.stringify(o, null, '\t');
}

// Returns the ISO week of the date.
Date.prototype.getWeek = function() {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

function getDayOfWeek(date) {
    // Zero based!
    return (date.getDay() + 6) % 7;
}

function getOrdinal(n) {
    var s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Generates string like "July 24th" from date object
function generateHumanDate(d) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var dayOfMonth = d.getDate()
    return monthNames[d.getMonth()] + " " + getOrdinal(dayOfMonth)
}

// Checks if data exists for specified date
function menuExistsForDate(data, d) {
    if(d.getFullYear().toString() in data
        && d.getWeek().toString() in data[d.getFullYear()]) {
        return true;
    }
    return false; 
}

// Get day of the date as an integer. Monday is 0, Sunday is 6
Date.prototype.getDayMondayBased = function() {
    var d = new Date(this.getTime());
    var x = d.getDay() - 1;
    if(x == -1) {
        return 6;
    }
    return x;
}

// Parse datestring in local timezone. String should be in ISO
// format: '2017-07-24T19:40:00'
function parseISOLocal(s) {
  var b = s.split(/\D/);
  return new Date(b[0], b[1]-1, b[2], b[3], b[4], b[5]);
}

// Get meals for a specified date
function mealsForDate(data,d) {
    if(!menuExistsForDate(data,d)) {
        return undefined;
    }

    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    var dayName = days[d.getDayMondayBased()];
    return data[d.getFullYear()][d.getWeek()][dayName];
}

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