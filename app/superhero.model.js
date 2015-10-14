var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuperheroSchema = new Schema({
  name: String,
  secretIdentity: String,
  attack: Number,
  counterAttack: Number,
  health: Number,
  /*
    "No capes!" https://youtu.be/Jy2YhxXn7NY
  */
  wearsCape: {type: Boolean, default: false}
});

module.exports = mongoose.model('Superhero', SuperheroSchema);