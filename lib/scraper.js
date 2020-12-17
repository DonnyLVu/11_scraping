const parser = require('./parser');
const request = require('./request');
const store = require('./store');
const fs = require('fs');
const pool = require('./utils/pool');


pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));

request()
  .then(info => parser(info))
  .then(books => store(books))
  .then(res => console.log(res.length));
