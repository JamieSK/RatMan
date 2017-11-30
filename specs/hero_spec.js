let assert = require('assert');
let Hero = require('../source/hero');

describe('Hero', function() {
  beforeEach(function() {
    chad = new Hero('Chad', 'Banana bread');
  });

  it('should have a name', function() {
    assert.strictEqual(chad.name, 'Chad');
  });

  it('should have a health', function() {
    assert.strictEqual(chad.health, 100);
  });

  it('should be able to talk', function() {
    assert.strictEqual(chad.talk(), 'I\'m Chad');
  });

  it('should have a list of tasks', function() {
    assert.deepStrictEqual(chad.tasks, []);
  });
});
