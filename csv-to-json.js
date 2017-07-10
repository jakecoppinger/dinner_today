var parse = require('csv-parse');
require('should');
var fs = require('fs')
// output.should.eql([ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]);

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

function prettyJSON(obj) {
    return JSON.stringify(obj, null, 4)
}

function processWeekCSV(data, callback) {
    var week = {};

    parse(data, {comment: '#',columns:true}, function(err, output) {
        parseRawObject(output);
        callback(week);
    });

    var parseRawObject = function(weekObj) {
        var includedMeals = {
            'Dinner': true,
            'Vegetarian':true,
            'Vegetables':true
        };

        for (var index in weekObj) {
            var chunk = weekObj[index];
            var mealName = chunk[""];

            if(mealName == '') {
                var emptyDays = 0;
                var mondayEmpty = false;

                // Check if only Monday has data;
                // If so, probably not a vegetable!
                for(var day in chunk) {
                    if(!day) continue;
                    if(chunk[day] == "") {
                        if(day == "Monday") mondayEmpty = true;
                        emptyDays += 1;
                    }
                }

                if(emptyDays == 6 && !mondayEmpty) continue; // Not vegetables
                
                // Add extra vegetables
                for(var day in chunk) {
                    if(!day) continue;
                    var cleanItem = chunk[day].trim().replace(/\s+/g,' ');

                    if(cleanItem != "") {
                        // { Dinner: 'Thai Yellow Chicken and Potato Curry with'
                        week[day]["Vegetables"] = week[day]["Vegetables"] || [];

                        week[day]["Vegetables"].push(cleanItem);
                    }
                }
            }

            // We only want specified meals
            if(!includedMeals[mealName]) continue;

            for(var day in chunk) {
                if(!day) continue;

                week[day] = week[day] || {};
                var cleanItem = chunk[day].trim().replace(/\s+/g,' ');

                if(mealName == "Vegetables") {
                    week[day][mealName] = week[day][mealName] || [];
                    week[day][mealName].push(cleanItem);
                } else {
                    week[day][mealName] = cleanItem;
                } 
            }
        }
    }
    return week;
}


var startingWeek = 30;

const csvStartWeek = 1;
const csvEndWeek = 8;

var menu = {};

var csvWeek = csvStartWeek;
var week = startingWeek;

function fileLoop(callback) {

    var filename = 'raw_data/week' + csvWeek + '.csv';

    parseCSV(filename, function(output) {
        menu[week] = output;

        csvWeek++;
        week++;

        // any more items in array? continue loop
        if(csvWeek <= csvEndWeek) {
            fileLoop(callback);   
        } else {
            callback(menu);
        }

    });
}

function parseCSV(filename, callback) {
    fs.readFile(filename, 'utf8', function(err,data) {
        if (err) {
            return console.log(err);
        }

        processWeekCSV(data, function(output) {
            callback(output);
        });
    });
}

fileLoop(function(output ) {
    console.log(prettyJSON(output));
});




