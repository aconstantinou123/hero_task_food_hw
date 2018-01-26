const Task = function (difficultyLevel, urgencyLevel, reward) {
    this.difficultyLevel = difficultyLevel;
    this.urgenceyLevel = urgencyLevel;
    this.reward = reward;
    this.isComplete = false;
}

module.exports = Task;