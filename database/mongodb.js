const mongoose = require('mongoose');

mongoose.connection.on('open', () => console.log('database connected'));

mongoose.connect('mongodb://localhost:27017/team-lineup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
