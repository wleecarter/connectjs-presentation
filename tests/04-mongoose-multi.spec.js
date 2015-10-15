'use strict';

var mongoose = require('mongoose');
var should = require('chai').should();
var sinon = require('sinon');

var service = require('../app/04-mongoose-multi');

// --------------- arrange ---------------
var args = {
  attackerId:123,
  defenderId:456
};
var attackerStartingHealth = 100;
var stubAttacker = {
  name: 'Dr. Strange',
  attack: 10,
  health: attackerStartingHealth
};
var defenderStartingHealth = 50;
var stubDefender = {
  name: 'Mephisto',
  counterAttack: 25,
  health: defenderStartingHealth
};
var actual = undefined;

describe('battle()', function() {
  beforeEach(function(done) {

    // --------------- arrange ---------------
    stubAttacker.health = attackerStartingHealth;
    stubDefender.health = defenderStartingHealth;

    sinon.stub(mongoose.Model, 'findById')
      .withArgs(args.attackerId)
      .yields(null, stubAttacker)
      .withArgs(args.defenderId)
      .yields(null, stubDefender);

    //sinon.stub(mongoose.Model, 'findById')
    //  .onFirstCall()
    //  .yields(null, stubAttacker)
    //  .onSecondCall()
    //  .yields(null, stubDefender);

    // --------------- act ---------------
    service.battle(args, function(err, outcome) {
      actual = outcome;
      done();
    });
  });
  afterEach(function() {
    mongoose.Model.findById.restore();
  });
  it('the defender\'s remaining health should equal their starting health ' +
    'minus the attacker\'s attack strength', function() {
    actual.defender.health.should.eql(
      defenderStartingHealth - stubAttacker.attack
    );
  });
  it('the attackers\'s remaining health should equal their starting health ' +
    'minus the attacker\'s counter-attack strength', function() {
    actual.attacker.health.should.eql(
      attackerStartingHealth - stubDefender.counterAttack
    );
  });
});

