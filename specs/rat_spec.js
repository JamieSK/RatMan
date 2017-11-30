let assert = require('assert');
let Rat = require('../source/rat');
let Food = require('../source/food');

describe('Rat', function() {
  beforeEach(function() {
    rat = new Rat();
    food = new Food('Apple', 5);
  });
});
