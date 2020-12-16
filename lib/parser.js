const parser = document => {
  const books = document.querySelectorAll('.product-pod');

  return [...books].map(book => ({
    name: book.querySelector('h3').textContent,

    // Might be .thumbnail for images
    imgUrl: book.querySelector('.image_container').querySelector('img').src,

    rating: book.querySelectorAll('.star-rating one', '.star-rating two', '.star-rating three', '.star-rating four', '.star-rating five').length,

    price: book.querySelector('.price_color').textContent,

    inStock: !book.querySelector('.instock-availability')
  }));
};

module.exports = parser;
