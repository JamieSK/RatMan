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

  eat: function(food) {
    this.health +=
      food.name === this.favouriteFood ? food.value * 1.5 : food.value;
  },
};

module.exports = Hero;
