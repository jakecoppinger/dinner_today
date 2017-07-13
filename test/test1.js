require("../data/data.js");
var app = require("../js/app.js");

var assert = require('assert');

describe('Dino', function() {
    describe('#mealsOnDate()', function() {
        var dateString = '2017-07-24T19:40:00';
        it('vegetarian meal correct on ' + dateString, function() {
            var today = app.parseISOLocal(dateString);

            var dino = new app.Dino(data);
            var meals = dino.mealsOnDate(today);
            assert.equal(meals.Vegetarian, 'Polenta & Vegetable Stacks With Marinated Tofu');
        });
    });
});

describe('Dino', function() {
    describe('#menuExistsOnDate()', function() {
        var dateString = '2017-07-13T19:40:00';
        it('menu does not exist on ' + dateString, function() {

            var d = app.parseISOLocal(dateString);

            var dino = new app.Dino(data);
            var exists = dino.menuExistsOnDate(d);
            assert.equal(exists, false);
        });
    });
});

describe('Dino', function() {
    describe('#menuExistsOnDate()', function() {
        var dateString = '2017-07-23T19:40:00';
        it('menu does not exist on ' + dateString, function() {

            var d = app.parseISOLocal(dateString);

            var dino = new app.Dino(data);
            var exists = dino.menuExistsOnDate(d);
            assert.equal(exists, false);
        });
    });
});


describe('Dino', function() {
    describe('#menuExistsOnDate()', function() {
        var dateString = '2017-07-24T19:40:00';
        it('menu does exist on ' + dateString, function() {

            var d = app.parseISOLocal(dateString);

            var dino = new app.Dino(data);
            var exists = dino.menuExistsOnDate(d);
            assert.equal(exists, true);
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
