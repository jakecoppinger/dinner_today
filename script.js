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

function getHumanDate() {
    document.write(generateHumanDate());
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


/////////////


Date.prototype.getDayMondayBased = function() {
    var x = d.getDay() - 1;
    if(x == -1) {
        return 6;
    }
    return x;
}

//var d = new Date(); 

function parseISOLocal(s) {
  var b = s.split(/\D/);
  return new Date(b[0], b[1]-1, b[2], b[3], b[4], b[5]);
}

var d = parseISOLocal('2017-07-24T19:40:00');

console.log("Date:");
console.log(d);
console.log("Day: " + d.getDayMondayBased());
console.log("Week number: " + d.getWeek());


var day = d.getDayMondayBased();


var menuExists = menuExistsForDate(data,d);


function mealsForDate(data,d) {
    if(!menuExistsForDate(data,d)) {
        return undefined;
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var dayName = days[day];
    return data[d.getFullYear()][d.getWeek()][dayName];
}




// Browser
if(inBrowser) {
    window.onload = function() {
        var meals = mealsForDate(data,d);

        if(meals) {
            var meal = data[year][week][dayName];
            writeToClass(meals.Dinner,"dinnerToday");
            writeToClass(meals.Vegetables, "vegetablesToday");
            writeToClass(meals.Vegetarian, "vegetarianToday");
        } else {
            document.getElementById('menu').style.display = 'none';
            document.getElementById('nomenu').style.display = 'block';
        }
    }
} else {
    // Not in browser
    var meals = mealsForDate(data,d);
    if(meals) {
        console.log("Today:");
        console.log("Dinner: " + meals.Dinner);
        console.log("Vegetables: " + meals.Vegetables);
        console.log("Vegetarian: " + meals.Vegetarian);
    } else {
        console.log("No menu exists");
    }
}