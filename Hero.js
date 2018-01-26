const Hero = function (name, favouriteFood) {
    this.name = name;
    this.health = 100;
    this.favouriteFood = favouriteFood;
    this.tasks = [];
}

Hero.prototype.talk = function () {
    return `My name is ${this.name}`;
}

module.exports = Hero;