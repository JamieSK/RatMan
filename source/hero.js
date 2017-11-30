let Hero = function(name) {
  this.name = name;
  this.health = 100;
};

Hero.prototype = {
  talk: function() {
    return 'I\'m ' + this.name;
  },
};

module.exports = Hero;
