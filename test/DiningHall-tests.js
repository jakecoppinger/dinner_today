var data = require("../src/data/data.json");
var DiningHall = require("../src/js/DiningHall.js");
var moment = require('moment');
var assert = require('assert');

describe('DiningHall', function() {
    describe('mealsOnDate()', function() {
        it('has correct vegetarian meal on October 15', function() {
            var dino = new DiningHall(data);
            var meals = dino.mealsOnDate(moment("2017-10-15 09:30"));
            console.log(meals);
            assert.equal(meals.Vegetarian, 
                'Leek, Zucchini & Red Pepper Strudel Served With A Cream Pesto Sauce');
        });

        it('has correct meal on 12th Nov', function() {
            var dino = new DiningHall(data);
            var meals = dino.mealsOnDate(moment("2017-11-12 09:30"));
            assert.equal(meals.Dinner, 
                "Grilled Chicken Schnitzel Served With A Red Wine Sauce");
        });
    });

    describe('menuExistsOnDate()', function() {
        it("does have a menu for 12th november 09:30", function() {
            var m = moment("2017-11-12 09:30");

            var dino = new DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), true);
        });

        it("doesn't have a menu for 13th november 09:30", function() {
            var m = moment("2017-11-13 09:30");

            var dino = new DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), false);
        });
    });
});