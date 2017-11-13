var data = require("../data/data.json");
var DiningHall = require("./DiningHall.js");
var moment = require('moment');


const Vue = require('vue');
const compiler = require('vue-template-compiler');


var humanDate = function(m) {
    return m.format("MMMM") + " " + m.format("Do");
}


//var today = moment("2017-07-24 09:30");
var today = moment();
var tomorrow = moment().add(1, 'days');

// Dinner finish time
const dinnerEnd = {
    hours: 19,
    minutes: 15
}

// Check if dinner has finished
var dinnerOver = false;
if (today.hours() >= dinnerEnd.hours &&
    today.minutes() > dinnerEnd.minutes) {
    dinnerOver = true;
}

var dino = new DiningHall(data);

const vueData = {
    humanDate: humanDate(today),
    mealsTodayData: dino.menuExistsOnDate(today),
    mealsTomorrowData: dino.menuExistsOnDate(tomorrow),
    mealsToday: dino.mealsOnDate(today),
    mealsTomorrow: dino.mealsOnDate(tomorrow),
    noMenu: !dino.menuExistsOnDate(today) && !dino.menuExistsOnDate(today),
    dinnerFinished: dinnerOver,
    feedbackEnabled: true
}

console.log('vuedata:', JSON.stringify(vueData,null,2))

var vueapp = new Vue({
    el: '#app',
    data: vueData
});


$(document).ready(function() {
    const mealsToday = dino.mealsOnDate(today);

    var $form = $('form#test-form')
    var url = 'https://script.google.com/macros/s/AKfycbx6jc5jiJXbubMY0Zfi8PKkopNrSmAjUX3FBTl4RYI5914WaWv0/exec';

    $('#submit-form').on('click', function(e) {
        var f = document.getElementsByTagName('form')[0];
        if (f.checkValidity()) {
            f.submit();
        } else {
            alert(document.getElementById('example').validationMessage);
        }

        const data = $form.serializeObject()

        data.main_meal = mealsToday.Dinner;
        data.vegetarian_meal = mealsToday.Vegetarian;
        data.vegetables = JSON.stringify(mealsToday.Vegetables);
        data.timestamp = moment().format();
        console.log(data)
        // data.diner = mealsToday.Dinner
        console.log("submitting form");


        e.preventDefault();
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data
        })
    });
});