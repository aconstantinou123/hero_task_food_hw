const Food = require('./Food');

const Rat = function () {
}

Rat.prototype.touchFood = function (food) {
    food.replenishmentValue =  -Math.abs(food.replenishmentValue);
}

module.exports = Rat;