const Book = require("../models/BookSchema");

exports.addBook = async (req, res) => {
  const { isbn, title, author, publisher, year, genre, quantity } =
    req.body;

  try {
    let book = await Book.findOne({ isbn });
    if (book) {
      return res.status(400).json({ msg: "Book already exists" });
    }

    book = new Book({
      isbn,
      title,
      author,
      publisher,
      year,
      genre,
      quantity,
      available: quantity, // Set available books to the same as quantity initially
    });

    await book.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updateBook = async (req, res) => {
  const { isbn, title, author, publisher, year, genre, quantity } =
    req.body;

  try {
    let book = await Book.findOne({ isbn });
    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }

    book.title = title || book.title;
    book.author = author || book.author;
    book.publisher = publisher || book.publisher;
    book.year = year || book.year;
    book.genre = genre || book.genre;
    book.quantity = quantity || book.quantity;
    book.available = book.quantity; // Assuming all books are available initially

    await book.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteBook = async (req, res) => {
  const { isbn } = req.body;

  try {
    await Book.findOneAndRemove({ isbn });
    res.json({ msg: "Book removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.searchBooks = async (req, res) => {
  const { query } = req.query;

  try {
    const books = await Book.find({
      $or: [
        { title: new RegExp(query, "i") },
        { author: new RegExp(query, "i") },
        { genre: new RegExp(query, "i") },
      ],
    });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
