const app = require('./lib/app');
const pool = require('./lib/utils/pool');
require('dotenv').config();

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
});

process.on('exit', () => {
  console.log('Goodbye!');
  pool.end();
});
