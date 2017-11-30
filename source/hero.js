let _ = require('lodash');

let Hero = function(name, favouriteFood) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasks = [];
};

Hero.prototype = {
  talk: function() {
    return 'I\'m ' + this.name;
  },
  acceptTask: function(task) {
      this.tasks.push(task);
  },
  sortTasks: function(parameter) {
      return _.sortBy(this.tasks, [parameter]).reverse();
  },
  viewCompleted: function() {
      return _.filter(this.tasks, ['isCompleted', true]);
  },
  viewIncomplete: function() {
      return _.filter(this.tasks, ['isCompleted', false]);
  }
};


module.exports = Hero;
