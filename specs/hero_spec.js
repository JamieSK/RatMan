let assert = require('assert');
let Hero = require('../source/hero');
let Task = require('../source/task');

describe('Hero', function() {
  beforeEach(function() {
    chad = new Hero('Chad', 'Banana bread');
    task1 = new Task('kill rat', 8, 8, 1000);
    task2 = new Task('bake banana bread', 6, 10, 0);
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
  it('should be able to accept tasks', function() {
      chad.acceptTask(task1);
      assert.deepStrictEqual(chad.tasks, [task1]);
  });
});
