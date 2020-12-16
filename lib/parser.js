const number = require('./numbers');

const parser = document => {

  const books = document.querySelectorAll('.product_pod');

  return [...books].map(book => ({
    name: book.querySelector('h3').textContent,

    // Might be .thumbnail for images
    imgUrl: book.querySelector('img').src,

    rating: number(book.querySelector('.star-rating').classList.item(1)),

    price: book.querySelector('.price_color').textContent,

    inStock: !book.querySelector('.icon-okay')
  }));
};


module.exports = parser;

// rating: book.getElementByClassName('.star-rating'[0].getAttribute('class'[1])),
