'use strict';

var expect = require('chai').expect;

describe.skip('equal vs eql vs deep equal', function() {
  it('examples', function() {

    // eql signifies "==" (equality operator)
    expect({ foo: 'bar' }).to.eql({ foo: 'bar' });

    /*
     "equal" signifies "strictly equal" (===)
     or the identity operator.
     "===" behaves identically to "==" except that no
     type conversion is done, so that if two values
     are not the same type, === will return false
     see: http://stackoverflow.com/a/359509
     */
    expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });

    expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
  });
});
