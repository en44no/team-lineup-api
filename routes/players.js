const express = require('express');
const router = express.Router();
const {
  addPlayers,
  getPlayers,
  deletePlayers,
} = require('../controllers/playersController');

router.post('/players', addPlayers);

router.get('/players', getPlayers);

router.delete('/players/:id', deletePlayers);

module.exports = router;
