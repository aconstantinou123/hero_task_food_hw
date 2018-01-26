const assert = require('assert');
const Hero = require('../Hero');

describe('Hero', function () {

    let hero;

    beforeEach(function () {
        hero = new Hero('Captain Average', 'Clams');
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

})