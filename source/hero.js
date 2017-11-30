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
  
  eat: function(food) {
    let healthEffect = food.value;
    if (food.name === this.favouriteFood) {
      healthEffect *= 1.5;
    }
    if (food.poisonous) {
      healthEffect = -healthEffect;
    }
    this.health += healthEffect;
  },
};


module.exports = Hero;
