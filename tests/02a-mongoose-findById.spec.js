'use strict';

var mongoose = require('mongoose');
var should = require('chai').should();
var sinon = require('sinon');

var controller = require('../app/02-mongoose-findById');
var res = require('./fake-response');

describe('findById() - 02a', function() {
  context('when a matching record is returned', function() {
    it('the response status code should be 200', function() {
      // arrange
      var req = {
        params: {
          id:123
        }
      };
      var superhero = {
        _id:123,
        name:'Dr. Strange'
      };

      sinon.stub(mongoose.Model, 'findById')
        .withArgs(req.params.id)
        .yields(null, superhero);

      // act
      controller.findById(req, res);

      mongoose.Model.findById.restore();

      // assert
      res.statusCode.should.eql(200);
    });
    it('the response should contain the matching record');
  });
  context('when an error is returned', function() {
    it('the response status code should be 500');
    it('the response should contain a user friendly error message');
  });
});
