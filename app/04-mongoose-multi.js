'use strict';

var Superhero = require('./superhero.model.js');

module.exports.battle = battle;

function battle(args, next) {
  Superhero.findById(args.attackerId, function(err, attacker) {
    Superhero.findById(args.defenderId, function(err, defender) {
      defender.health -= attacker.attack;
      attacker.health -= defender.counterAttack;
      next(null, {attacker:attacker, defender:defender});
    });
  });
}