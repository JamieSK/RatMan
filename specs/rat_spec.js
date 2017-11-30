let assert = require('assert');
let Rat = require('../source/rat');
let Food = require('../source/food');

describe('Rat', function() {
  beforeEach(function() {
    rat = new Rat();
    food = new Food('Apple', 5);
  });

  it('should be able to touch food and poison it', function() {
    assert.strictEqual(food.poisonous, false);
    rat.touch(food);
    assert.strictEqual(food.poisonous, true);
  });
});
