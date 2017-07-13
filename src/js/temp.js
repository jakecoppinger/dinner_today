var moment = require('moment');
moment().format();

var temp = moment("2017-02-08 09:30:26")



var humanDate = function(m) {
    return m.format("MMMM") + " " + m.format("Do");
}


console.log(temp.format());

console.log(humanDate(temp));
