 var _ = require("lodash");

 var Task = function(description, difficulty, urgency, reward) {
     this.description = description;
     this.difficulty = difficulty;
     this.urgency = urgency;
     this.reward = reward;
     this.isCompleted = false;
 }

Task.prototype = {
    completeTask: function() {
        this.isCompleted = true;
    }
};

module.exports = Task;
