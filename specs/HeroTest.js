const assert = require('assert');
const Hero = require('../Hero');
const Food = require('../Food');

describe('Hero', function () {

    let hero;
    let food1;
    let food2;

    beforeEach(function () {
        hero = new Hero('Captain Average', 'Clams');
        food1 = new Food('Cheese', 10);
        food2 = new Food('Clams', 20);
    })

    it('can get heroes name', function () {
        assert.strictEqual(hero.name, 'Captain Average');
    })

    it('can get heroes health', function () {
        assert.strictEqual(hero.health, 100);
    })

    it('can get heroes favourite food', function(){
        assert.strictEqual(hero.favouriteFood, 'Clams');
    })

    it('can get empty list of tasks', function () {
        assert.strictEqual(hero.tasks.length, 0);
    })

    it('hero can talk and say their name', function () {
        assert.strictEqual(hero.talk(), 'My name is Captain Average');
    })

    it('hero can eart', function () {
        hero.health = 50;
        hero.eat(food1);
        assert.strictEqual(hero.health, 60);
    })

    it('heroes health cant go over 100', function () {
        hero.health = 95;
        hero.eat(food1);
        assert.strictEqual(hero.health, 100);
    })

    it('can check favourite food', function () {
        assert.strictEqual(hero.favouriteFoodCheck(food1), false);
        assert.strictEqual(hero.favouriteFoodCheck(food2), true);
    })

    it ('heroes favourite food boost health 1.5 times', function () {
        hero.health = 50;
        hero.eat(food2);
        assert.strictEqual(hero.health, 80);
    })


})