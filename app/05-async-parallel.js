'use strict';

var async = require('async');
var Superhero = require('./superhero.model.js');

module.exports.battle = battleRefactored;

function battleRefactored(args, next) {
  async.parallel([
      function getAttacker(callback) {
        Superhero.findById(args.attackerId).exec(callback);
      },
      function getDefender(callback) {
        Superhero.findById(args.defenderId).exec(callback);
      }
    ],
    function doBattle(err, asyncResults) {
      var attacker = asyncResults[0];
      var defender = asyncResults[1];
      defender.health -= attacker.attack;
      attacker.health -= defender.counterAttack;
      next(null, {attacker:attacker, defender:defender});
    });
}

