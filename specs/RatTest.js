const assert = require('assert');
const Rat = require('../Rat');
const Food = require('../Food');

describe('Rat', function () {

    let rat;
    let food;

    beforeEach(function () {
        rat = new Rat();
        food = new Food('Sweet and Sour Chicken', 10);
    })

    it('can poison food', function () {
        rat.touchFood(food);
        assert.strictEqual(food.replenishmentValue, -10);
    })

})