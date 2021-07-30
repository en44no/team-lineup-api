require('dotenv').config();
require('./database/mongodb');
const app = require('./app');

const port = process.env.APP_PORT;
app.listen(port, () => console.log(`listen on port ${port}`));
