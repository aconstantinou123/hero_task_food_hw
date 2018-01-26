const assert = require('assert');
const Food = require('../Food');

describe('Food', function () {

    let food

    beforeEach(function () {
        food = new Food('Haribo', 10);
    })

    it('can get name of food', function () {
        assert.strictEqual(food.name, 'Haribo');
    })

    it('can get replenishment value of food', function () {
        assert.strictEqual(food.replenishmentValue, 10);
    })

})