'use strict';

/*
  A third-party testing framework is technically NOT required for
  testing node code.

  Below is an example of a test written using Node's built-in
  assertion library.

  Third-party testing frameworks, however, make for more efficient
  and convenient test automation.
 */

var calculator = require('../app/01-calculator');
var assert = require('assert'); // node's built-in assertion library

// arrange
var expected = 4;

// act
var actual = calculator.multiply(2,2);

// assert
assert.strictEqual(
  actual,
  expected,
  'oops, actual and expected are not equal'
);

console.log('you are a magnificent coder!');

