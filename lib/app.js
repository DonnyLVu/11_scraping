const express = require('express');
const app = express();
const Book = require('./models/book');

app.use(express.json());

// CREATE
app.post('/books', (req, res, next) => {
  Book
    .insert(req.body)
    .then(book => res.send(book))
    .catch(next);
});
