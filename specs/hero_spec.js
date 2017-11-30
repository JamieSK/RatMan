let assert = require('assert');
let Hero = require('../source/hero');

describe('Hero', function() {
  beforeEach(function() {
    chad = new Hero('Chad', 'Banana bread');
  });

  it('should have a name', function() {
    assert.strictEqual(chad.name, 'Chad');
  });
});
