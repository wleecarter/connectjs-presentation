var expect = require('chai').expect;

describe('using done() with async tests', function(){

  var foo = false;

  context('when done() is not used', function() {
    beforeEach(function(){

      // simulate async call w/ setTimeout
      setTimeout(function(){
        foo = true;
      }, 50);

    });

    it('you shall not pass', function(){
      expect(foo).equals(true);
    });

  });

  context('when done() is used', function(){

    beforeEach(function(done){

      setTimeout(function(){
        foo = true;

        // complete the async beforeEach
        done();

      }, 50);

    });

    it('you shall pass', function(){
      expect(foo).equals(true);
    });

  });

});