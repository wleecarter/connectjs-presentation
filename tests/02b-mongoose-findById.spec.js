'use strict';

var mongoose = require('mongoose');
var should = require('chai').should();
var sinon = require('sinon');

var controller = require('../app/02-mongoose-findById');
var res = require('./fake-response');

describe('findById() - 02b', function() {
  context('when a matching record is found', function() {
    var req = {
      params: {
        id:123
      }
    };
    var superhero = {
      _id:123,
      name:'Dr. Strange'
    };
    beforeEach(function() {
      sinon.stub(mongoose.Model, 'findById')
        .withArgs(req.params.id)
        .yields(null, superhero);

      controller.findById(req, res);
    });
    afterEach(function() {
      mongoose.Model.findById.restore();
    });
    it('the response status code should be 200', function() {
      res.statusCode.should.eql(200);
    });
    it('the response should contain the matching record', function() {
      res.body.should.eql(superhero);
    });
  });
});

