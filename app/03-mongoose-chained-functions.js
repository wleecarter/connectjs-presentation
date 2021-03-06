'use strict';

var Superhero = require('./superhero.model.js');

module.exports.findById = findById;

function findById(req, res) {
  Superhero.findById(req.params.id)
    .populate('superpowers')
    .lean()
    .exec(function(err, superhero) {
      if(err) {
        return res.status(500).json({message:'an unexpected error has occurred'});
      }
      res.status(200).json(superhero);
  });
}