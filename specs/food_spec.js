let assert = require('assert');
let Food = require('../source/food');

describe('Food', function() {
  beforeEach(function() {
    food = new Food('Banana bread', 9999);
  });

  it('should have a name', function() {
    assert.strictEqual(food.name, 'Banana bread');
  });
});
