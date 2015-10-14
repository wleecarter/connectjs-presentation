'use strict';

var calculator = require('../app/01-calculator');

var assert = require('chai').assert;

suite('multiply()', function() {

  test('2 times 2 equals 4', function() {
    var expected = 4;
    var actual = calculator.multiply(2,2);

    // DANGER AHEAD - BAD CODE:
    assert.equal(actual, expected);
  });

});
