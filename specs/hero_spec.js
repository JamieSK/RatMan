let assert = require('assert');
let Hero = require('../source/hero');
let Food = require('../source/food');

describe('Hero', function() {
  beforeEach(function() {
    chad = new Hero('Chad', 'Banana bread');
    food = new Food('Shortbread', 20);
    favouriteFood = new Food('Banana bread', 50);
  });

  it('should have a name', function() {
    assert.strictEqual(chad.name, 'Chad');
  });

  it('should have a health', function() {
    assert.strictEqual(chad.health, 100);
  });

  it('should have a favourite food', function() {
    assert.strictEqual(chad.favouriteFood, 'Banana bread');
  });

  it('should be able to talk', function() {
    assert.strictEqual(chad.talk(), 'I\'m Chad');
  });

  it('should have a list of tasks', function() {
    assert.deepStrictEqual(chad.tasks, []);
  });

  it('should be able to eat food', function() {
    chad.eat(food);
    assert.strictEqual(chad.health, 120);
  });

  it('should particularly enjoy their favourite food', function() {
    chad.eat(favouriteFood);
    assert.strictEqual(chad.health, 175);
  });
});
