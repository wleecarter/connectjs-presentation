'use strict';

var mockHttp = require('node-mocks-http');
var mongoose = require('mongoose');
var should = require('chai').should();
var sinon = require('sinon');

var controller = require('../app/02-mongoose-findById');

describe('findById() - 02c', function() {
  context('when a matching record is found', function() {
    var req, res;
    var stubSuperhero = {_id:123,name:'Dr. Strange'};
    beforeEach(function() {
      req = mockHttp.createRequest({params:{id:123}});
      res = mockHttp.createResponse();
      sinon.stub(mongoose.Model, 'findById')
        .withArgs(req.params.id)
        .yields(null, stubSuperhero);

      controller.findById(req, res);
    });
    afterEach(function() {
      mongoose.Model.findById.restore();
    });
    it('the response status code should be 200', function() {
      res.statusCode.should.eql(200);
    });
    it('the response should contain the matching record', function() {
      var body = JSON.parse( res._getData() );
      body.name.should.eql(stubSuperhero.name);
      body._id.should.eql(stubSuperhero._id);
      body.should.eql(stubSuperhero);
    });
  });
});

