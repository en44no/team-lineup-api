const Players = require('../models/Players');

async function addPlayers(req, res) {
  try {
    const { name, number, position } = req.body;

    const player = Players({ name, number, position });

    const newPlayer = await player.save();
    res.status(201).send({ newPlayer });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

async function getPlayers(req, res) {
  const allPlayers = await Players.find().lean().exec();
  res.status(200).send({ allPlayers });
}

const functions = {
  addPlayers,
  getPlayers,
};

module.exports = functions;
