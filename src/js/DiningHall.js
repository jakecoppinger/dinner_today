function DiningHall(data) {
  this.data = data;
}

// Get meals for a specified date
DiningHall.prototype.mealsOnDate = function(m) {
    if(!this.menuExistsOnDate(m)) {
        return undefined;
    }

    var day= m.format("dddd");
    var week = m.isoWeek(); //m.format("w");
    var year = m.format("YYYY")
    return this.data[year][week][day];
}

// Checks if data exists for specified date
DiningHall.prototype.menuExistsOnDate = function(m) {
    var year = m.format("YYYY")
    var week = m.isoWeek(); //m.format("w");

    if(year in this.data
        && week in this.data[year]) {
        return true;
    }
    return false; 
}

module.exports = DiningHall;