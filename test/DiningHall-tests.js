var data = require("../src/data/data.json");
var DiningHall = require("../src/js/DiningHall.js");
var moment = require('moment');
var assert = require('assert');

describe('DiningHall', function() {
    describe('mealsOnDate()', function() {
        it('has correct vegetarian meal on 07-24', function() {
            var dino = new DiningHall(data);
            var meals = dino.mealsOnDate(moment("2017-07-24 09:30"));
            assert.equal(meals.Vegetarian, 
                'Polenta & Vegetable Stacks With Marinated Tofu');
        });

        it('has correct meal on 18th August', function() {
            var dino = new DiningHall(data);
            var meals = dino.mealsOnDate(moment("2017-08-18 09:30"));
            assert.equal(meals.Dinner, 
                "Braised Chicken in Mushroom Sauce");
        });

        it('has correct meal on 6th September', function() {
            var dino = new DiningHall(data);
            var meals = dino.mealsOnDate(moment("2017-09-06 09:30"));
            assert.equal(meals.Dinner, 
                "Pizza & Pasta Night");
        });
    });

    describe('menuExistsOnDate()', function() {
        it("doesn't has a menu for 2017-07-13 09:30", function() {
            var m = moment("2017-07-13 09:30");
            var dino = new DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), false);
        });

        it("doesn't have a menu for 2017-07-23 09:30", function() {
            var m = moment("2017-07-23 09:30");
            var dino = new DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), false);
        });

        it("does have a menu for 2017-07-24 09:30", function() {
            var m = moment("2017-07-24 09:30");
            var dino = new DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), true);
        });

        it("does have a menu for 2017-09-17 09:30", function() {
            var m = moment("2017-09-17 09:30");

            var dino = new DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), true);
        });

        it("doesn't have a menu for 2017-09-18 09:30", function() {

            var m = moment("2017-09-18 09:30");
            var dino = new DiningHall(data);

            assert.equal(dino.menuExistsOnDate(m), false);
        });
    });
});