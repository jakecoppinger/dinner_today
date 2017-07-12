inBrowser = true;

if (typeof window === 'undefined') {
    inBrowser = false;
} 

if(!inBrowser) {
    require("./data.js");
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

// Returns the four-digit year corresponding to the ISO week of the date.
Date.prototype.getWeekYear = function() {
    var date = new Date(this.getTime());
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    return date.getFullYear();
}

// function getDinnerWeek() {
//     var d = new Date(); // Get today's date and time
//     //document.write(d.toLocaleString());  // Insert it into the document

//     var weekOffset = -8;
//     var yearWeek = d.getWeek();
//     var hallWeek = yearWeek + weekOffset;
//     return hallWeek
// }

function getDayOfWeek(date) {
    // Zero based!
    return (date.getDay() + 6) % 7;
}

function meal(portion, dayOffset) {
    var d = new Date();

    dayOfWeek = getDayOfWeek(d) + dayOffset;
    week = getDinnerWeek(d) + Math.floor(dayOfWeek / 7)

    // Account for midsem:
    // if(week >= 8) {
    //     week -= 1;
    // }

    dayData = dinner_data[week.toString()]

    // console.log("dayOffset: " + dayOffset)
    // console.log("day of week: " + dayOfWeek);
    // console.log("week: " + getDinnerWeek(d) + Math.floor(dayOffset / 7));
    // console.log("Math.floor(dayOffset / 7): " + Math.floor(dayOffset / 7));

    return dayData[portion][dayOfWeek % 7]
}

function printMeal(portion, offset = 0) {
    document.write(meal(portion, offset));
}

function getOrdinal(n) {
    var s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}


function generateHumanDate() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var d = new Date();
    var dayOfMonth = d.getDate()
    return getOrdinal(dayOfMonth) + " of " + monthNames[d.getMonth()]
}


// Write str into DOM object with class className
function writeToClass(str, className) {
    document.querySelector('.' + className).innerHTML = str;
}

function menuExistsForDate(data, d) {
    if(d.getFullYear().toString() in data
        && d.getWeek().toString() in data[d.getFullYear()]) {
        return true;
    }
    return false; 
}

function prettyPrintDate(d) {
    console.log("Date " + d + ":");
    console.log("Day: " + d.getDayMondayBased());
    console.log("Week number: " + d.getWeek()); 
}

Date.prototype.getDayMondayBased = function() {
    var d = new Date(this.getTime());
    var x = d.getDay() - 1;
    if(x == -1) {
        return 6;
    }
    return x;
}

function parseISOLocal(s) {
  var b = s.split(/\D/);
  return new Date(b[0], b[1]-1, b[2], b[3], b[4], b[5]);
}



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
    console.log(d);
    console.log(d.getDayMondayBased());
    console.log("\n");
    return data[d.getFullYear()][d.getWeek()][dayName];
}

/////////////

//var d = new Date(); 

var today = new Date(); //parseISOLocal('2017-07-24T19:40:00');

var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);


var mealsToday = mealsForDate(data,today);
var mealsTomorrow = mealsForDate(data,tomorrow);

console.log(mealsTomorrow);

if(inBrowser) {
    window.onload = function() {

        if(mealsToday) {
            writeToClass(mealsToday.Dinner,"dinnerToday");
            writeToClass(mealsToday.Vegetables, "vegetablesToday");
            writeToClass(mealsToday.Vegetarian, "vegetarianToday");
        } else {
            document.getElementById('menu').style.display = 'none';
            document.getElementById('nomenu').style.display = 'block';
        }

        if(mealsTomorrow) {
            writeToClass(mealsTomorrow.Dinner,"dinnerTomorrow");
            writeToClass(mealsTomorrow.Vegetables, "vegetablesTomorrow");
            writeToClass(mealsTomorrow.Vegetarian, "vegetarianTomorrow");
        } else {
            document.getElementById('tomorrowdinner').style.display = 'none';
        }

    }
} else {
    // Not in browser

   
    if(mealsToday) {
        console.log("\nToday:");
        console.log("Dinner: " + mealsToday.Dinner);
        console.log("Vegetables: " + mealsToday.Vegetables);
        console.log("Vegetarian: " + mealsToday.Vegetarian);
    } else {
        console.log("No menu today.");
    }


   if(mealsTomorrow) {
        console.log("\nTomorrow:");
        console.log("Dinner: " + mealsTomorrow.Dinner);
        console.log("Vegetables: " + mealsTomorrow.Vegetables);
        console.log("Vegetarian: " + mealsTomorrow.Vegetarian);
    } else {
        console.log("No menu tomorrow.");
    }


}