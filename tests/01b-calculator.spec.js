'use strict';

var calculator = require('../app/01-calculator');

// assertion libraries:
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

describe('multiply()', function() {

  it('2 times 2 equals 4', function() {
    // arrange
    var expected = 4;

    // act
    var actual = calculator.multiply(2,2);

    // DANGER AHEAD - BAD CODE:
    // assert
    assert(actual, expected);

    // expect(actual).to.eql(expected);
    // actual.should.eql(expected);
  });

});
