require("../data/data.js");
var app = require("../js/app.js");

var assert = require('assert');

describe('Meals', function() {
    describe('#mealsForDate()', function() {

        var dateString = '2017-07-24T19:40:00';
        it('vegetarian meal correct on ' + dateString, function() {
            var today = app.parseISOLocal('2017-07-24T19:40:00');
            var meals = app.mealsForDate(data,today);
            assert.equal(meals.Vegetarian, 'Polenta & Vegetable Stacks With Marinated Tofu');
        });
    });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
