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

var prettyJSON = function(obj) {
    return JSON.stringify(obj, null, 4)
}

fs.readFile('raw_data/week1.csv', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }

    processWeekCSV(data, function(output) {
        console.log(prettyJSON(output));
    });

    
});

var processWeekCSV = function(data, callback) {
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

            if(includedMeals[mealName] == true) {

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

            if(mealName == '') {
                var emptyDays = 0;
                var mondayEmpty = false;

                for(var day in chunk) {
                    if(!day) continue;
                    if(chunk[day] == "") {
                        if(day == "Monday") mondayEmpty = true;
                        emptyDays += 1;
                    }
                }

                if(emptyDays == 6 && !mondayEmpty) continue; // Not vegetables
                console.log(prettyJSON(chunk));

                // Add extra vegetables
                for(var day in chunk) {
                    if(!day) continue;
                    var cleanItem = chunk[day].trim().replace(/\s+/g,' ');

                    if(cleanItem != "") {
                        week[day]["Vegetables"].push(cleanItem);
                    }
                }
            }
            // console.log("///");
        }
    }
    return week;
}


