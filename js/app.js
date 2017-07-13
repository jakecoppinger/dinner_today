// var prettyJSON = function(o) {
//     return JSON.stringify(o, null, '\t');
// }

// Constructor
function Dino(data) {
  this.data = data;
}

// Get meals for a specified date
Dino.prototype.mealsOnDate = function(d) {
    if(!this.menuExistsOnDate(d)) {
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

// Checks if data exists for specified date
Dino.prototype.menuExistsOnDate = function(d) {
    if(d.getFullYear().toString() in this.data
        && d.getWeek().toString() in this.data[d.getFullYear()]) {
        return true;
    }
    return false; 
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

var getDayOfWeek = function(date) {
    // Zero based!
    return (date.getDay() + 6) % 7;
}

var getOrdinal = function(n) {
    var s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Generates string like "July 24th" from date object
var generateHumanDate = function(d) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var dayOfMonth = d.getDate()
    return monthNames[d.getMonth()] + " " + getOrdinal(dayOfMonth)
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
var parseISOLocal = function(s) {
  var b = s.split(/\D/);
  return new Date(b[0], b[1]-1, b[2], b[3], b[4], b[5]);
}

module.exports.Dino = Dino;

exports.generateHumanDate = generateHumanDate;
// exports.menuExistsForDate = menuExistsForDate;
// exports.mealsForDate = mealsForDate;
exports.parseISOLocal = parseISOLocal;

// exports.prettyJSON = prettyJSON;
// exports.getDayOfWeek = getDayOfWeek;
// exports.getOrdinal = getOrdinal;



