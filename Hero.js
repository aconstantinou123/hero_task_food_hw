const Food = require('./Food');

const Hero = function (name, favouriteFood) {
    this.name = name;
    this.health = 100;
    this.favouriteFood = favouriteFood;
    this.tasks = [];
}

Hero.prototype.talk = function () {
    return `My name is ${this.name}`;
}

Hero.prototype.favouriteFoodCheck = function (food) {
    if(this.favouriteFood === food.name){
        return true;
    }
    return false;
}


Hero.prototype.eat = function (food) {
    var maxHealth = 100
    if (this.favouriteFoodCheck(food) === true && this.health < maxHealth){
        this.health += (food.replenishmentValue * 1.5);
    }

    else if (this.health < maxHealth){
        this.health += food.replenishmentValue;
    }
        if (this.health > maxHealth){
            this.health = maxHealth;
        }
}

module.exports = Hero;