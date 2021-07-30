const express = require('express');
const router = express.Router();
const { addPlayers, getPlayers } = require('../controllers/playersController');

router.post('/players', addPlayers);

router.get('/players', getPlayers);

module.exports = router;
