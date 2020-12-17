const pool = require('../utils/pool');

class Book {
  name;
  imgUrl;
  rating;
  price;
  inStock;

  constructor(row) {
    this.name = row.name;
    this.imgUrl = row.img_url;
    this.rating = row.rating;
    this.price = row.price;
    this.inStock = row.in_stock;
  }

  static async insert({ name, imgUrl, rating, price, inStock }) {
    const { rows } = await pool.query(
      `INSERT INTO books
      (name, img_url, rating, price, in_stock)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [name, imgUrl, rating, price, inStock]
    );

    return new Book(rows[0]);
  }

}

module.exports = Book;
