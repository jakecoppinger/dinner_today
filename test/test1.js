require("../src/data/data.js");
var app = require("../src/js/app.js");
var moment = require('moment');
var assert = require('assert');

describe('DiningHall', function() {
    describe('#mealsOnDate()', function() {
        var dateString = "2017-07-24 09:30";
        //'2017-07-24T19:40:00';

        it('vegetarian meal correct on ' + dateString, function() {
            var m = moment(dateString);

            var dino = new app.DiningHall(data);
            var meals = dino.mealsOnDate(m);
            assert.equal(meals.Vegetarian, 'Polenta & Vegetable Stacks With Marinated Tofu');
        });
    });
});

describe('DiningHall', function() {
    describe('#menuExistsOnDate()', function() {
        var dateString = "2017-07-13 09:30";
        it('menu does not exist on ' + dateString, function() {
            var m = moment(dateString);

            var dino = new app.DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), false);
        });
    });
});

describe('DiningHall', function() {
    describe('#menuExistsOnDate()', function() {
        var dateString = '2017-07-23 09:30';
        it('menu does not exist on ' + dateString, function() {
            var m = moment(dateString);

            var dino = new app.DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), false);
        });
    });
});


describe('Dino', function() {
    describe('#menuExistsOnDate()', function() {
        var dateString = '2017-07-24 09:30';
        it('menu does exist on ' + dateString, function() {
            var m = moment(dateString);

            var dino = new app.DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), true);
        });
    });
});

describe('Dino', function() {
    describe('#menuExistsOnDate()', function() {
        var dateString = '2017-09-17 09:30';
        it('menu does exist on ' + dateString, function() {
            var m = moment(dateString);

            var dino = new app.DiningHall(data);
            assert.equal(dino.menuExistsOnDate(m), true);
        });
    });
});

describe('DiningHall', function() {
    describe('#menuExistsOnDate()', function() {
        var dateString = '2017-09-18 09:30';
        it('menu does not exist on ' + dateString, function() {

            var m = moment(dateString);
            var dino = new app.DiningHall(data);

            assert.equal(dino.menuExistsOnDate(m), false);
        });
    });
});





