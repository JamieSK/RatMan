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
  }
};


module.exports = Hero;
