const assert = require('assert');
const Task = require('../Task');

describe('Task', function () {

    let task;

    beforeEach(function () {
        task = new Task(5, 3, 'Ham Sandwich');
    })

    it('can get difficulty level', function () {
        assert.strictEqual(task.difficultyLevel, 5);
    })

    it('can get urgency level', function () {
        assert.strictEqual(task.urgenceyLevel, 3);
    })

    it('can get reward', function () {
        assert.strictEqual(task.reward, 'Ham Sandwich');
    })

    it('can get check to see if task is completed', function () {
        assert.strictEqual(task.isComplete, false);
    })

})