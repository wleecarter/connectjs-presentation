'use strict';

var Superhero = require('./superhero.model.js');

module.exports.findById = findById;

function findById(req, res) {
  Superhero.findById(req.params.id, function(err, superhero) {
    if(err) {
      return res.status(500).json(
        {message:'something has gone horribly wrong'}
      );
    }
    res.status(200).json(superhero);
  });
}