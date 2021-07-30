const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const playerRoutes = require('./routes/players');

const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use('/', playerRoutes);

module.exports = app;
