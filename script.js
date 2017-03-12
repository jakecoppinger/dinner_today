// This script is released to the public domain and may be used, modified and
// distributed without restrictions. Attribution not necessary but appreciated.
// Source: https://weeknumber.net/how-to/javascript 

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

function getDinnerWeek() {
    var d = new Date(); // Get today's date and time
    //document.write(d.toLocaleString());  // Insert it into the document

    var weekOffset = -8;
    var yearWeek = d.getWeek();
    var hallWeek = yearWeek + weekOffset;
    return hallWeek
}

function getDayOfWeek(d) {
    // Zero based!
    return (d.getDay() + 6) % 7;
}

function meal(portion, dayOffset) {
    var d = new Date();

    dayOfWeek = getDayOfWeek(d) + dayOffset;
    week = getDinnerWeek(d) + Math.floor(dayOfWeek / 7)
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


function getHumanDate() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var d = new Date();
    var dayOfMonth = d.getDate()
    var s = getOrdinal(dayOfMonth) + " of " + monthNames[d.getMonth()]

    document.write(s);
}