require("../src/data/data.js");
var app = require("../src/js/app.js");
var moment = require('moment');
var assert = require('assert');

describe('DiningHall', function() {
    describe('mealsOnDate()', function() {
        it('has a vegetarian meal on 07-24', function() {
            var dino = new app.DiningHall(data);
            var meals = dino.mealsOnDate(moment("2017-07-24 09:30"));
            assert.equal(meals.Vegetarian, 
                'Polenta & Vegetable Stacks With Marinated Tofu');
        });
    });

    describe('menuExistsOnDate()', function() {
        it("doesn't has a menu for 2017-07-13 09:30", function() {
            var m = moment("2017-07-13 09:30");
            var dino = new app.DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), false);
        });

        it("doesn't have a menu for 2017-07-23 09:30", function() {
            var m = moment("2017-07-23 09:30");
            var dino = new app.DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), false);
        });

        it("does have a menu for 2017-07-24 09:30", function() {
            var m = moment("2017-07-24 09:30");
            var dino = new app.DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), true);
        });

        it("does have a menu for 2017-09-17 09:30", function() {
            var m = moment("2017-09-17 09:30");

            var dino = new app.DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), true);
        });

        it("doesn't have a menu for 2017-09-18 09:30", function() {

            var m = moment("2017-09-18 09:30");
            var dino = new app.DiningHall(data);

            assert.equal(dino.menuExistsOnDate(m), false);
        });
    });
});