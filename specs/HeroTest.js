const assert = require('assert');
const Hero = require('../Hero');
const Food = require('../Food');
const Task = require('../Task');
const Rat = require('../Rat');

describe('Hero', function () {

    let hero;
    let food1;
    let food2;
    let task1;
    let task2;
    let task3;
    let rat;

    beforeEach(function () {
        hero = new Hero('Captain Average', 'Clams');
        food1 = new Food('Cheese', 10);
        food2 = new Food('Clams', 20);
        task1 = new Task(5, 3, 'Cats');
        task2 = new Task(3, 5, 'Milk');
        task3 = new Task(1, 2, 'Argentina');
        rat = new Rat();
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

    it('heroes favourite food boost health 1.5 times', function () {
        hero.health = 50;
        hero.eat(food2);
        assert.strictEqual(hero.health, 80);
    })

    it('can add tasks to heroes tasks array', function () {
        hero.addTasks(task1);
        hero.addTasks(task2);
        hero.addTasks(task3);
        assert.strictEqual(hero.tasks.length, 3);
    })

    it('can sort tasks by difficulty', function () {
        hero.addTasks(task1);
        hero.addTasks(task3);
        hero.addTasks(task2);
        assert.deepEqual(hero.sortTasksByDifficulty(), [task1, task2, task3]);
    })

    it('can sort tasks by urgency', function () {
        hero.addTasks(task1);
        hero.addTasks(task3);
        hero.addTasks(task2);
        assert.deepEqual(hero.sortTasksByUrgency(), [task2, task1, task3]);
    })

    it('can sort tasks alphabetically by reward', function () {
        hero.addTasks(task1);
        hero.addTasks(task3);
        hero.addTasks(task2);
        assert.deepEqual(hero.sortTasksByReward(), [task3, task1, task2]);
    })

    it('can complete tasks', function () {
        hero.addTasks(task1);
        hero.addTasks(task3);
        hero.addTasks(task2);
        hero.completeTask(task1);
        assert.strictEqual(task1.isComplete, true);
    })

    it('can return an array of completed tasks', function () {
        hero.addTasks(task1);
        hero.addTasks(task3);
        hero.addTasks(task2);
        hero.completeTask(task1);
        assert.deepEqual(hero.viewCompletedTasks(), [task1]);
    })

    it('can return an array of incomplete tasks', function () {
        hero.addTasks(task1);
        hero.addTasks(task3);
        hero.addTasks(task2);
        hero.completeTask(task1);
        assert.deepEqual(hero.viewIncompleteTasks(), [task3, task2]);
    })

    it('poisoned food will reduce health', function () {
        rat.touchFood(food1);
        hero.eat(food1);
        assert.strictEqual(hero.health, 90);
        rat.touchFood(food2);
        hero.eat(food2)
        assert.strictEqual(hero.health, 60);
    })



})