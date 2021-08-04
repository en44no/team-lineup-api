const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayersSchema = Schema(
  {
    name: String,
    number: Number,
    position: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Players', PlayersSchema);
/**/
