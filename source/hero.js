let Hero = function(name) {
  this.name = name;
  this.health = 100;
  this.tasks = [];
};

Hero.prototype = {
  talk: function() {
    return 'I\'m ' + this.name;
  },
};

module.exports = Hero;
