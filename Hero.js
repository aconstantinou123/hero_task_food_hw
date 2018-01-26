const Food = require('./Food');
const Task = require('./Task');

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

Hero.prototype.addTasks = function (task) {
    this.tasks.push(task)
}

Hero.prototype.sortTasksByDifficulty = function () {
    return this.tasks.sort(function (a, b) {
        return b.difficultyLevel - a.difficultyLevel;
    })
}

Hero.prototype.sortTasksByUrgency = function () {
    return this.tasks.sort(function (a, b) {
        return b.urgenceyLevel - a.urgenceyLevel;
    })
}

Hero.prototype.sortTasksByReward = function () {
  var rewardAwardArray = [];
  this.tasks.forEach(function (task) {
      rewardAwardArray.push(task.reward);
  })
    rewardAwardArray.sort();
  var sortedArray = [];
  for(reward of rewardAwardArray){
      this.tasks.forEach(function (task) {
          if(reward == task.reward){
              sortedArray.push(task);
          }
      })
  }
  this.tasks = sortedArray;
  return this.tasks;
}

Hero.prototype.completeTask = function (taskToComplete) {
    this.tasks.forEach(function (task) {
        if(taskToComplete === task) {
            task.isComplete = true;
        }
    })
}

module.exports = Hero;