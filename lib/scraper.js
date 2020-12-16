const parser = require('./parser');
const request = require('./request');

request()
  .then(document => parser(document))
  .then(console.log('hello world'))
  .then(console.log);

