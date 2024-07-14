const Borrow = require("../models/Borrow");
const Book = require("../models/BookSchema");

exports.borrowBook = async (req, res) => {
  const { userId, bookId, dueDate } = req.body;

  try {
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }

    if (book.available < 1) {
      return res.status(400).json({ msg: "Book not available" });
    }

    const borrow = new Borrow({
      user: userId,
      book: bookId,
      dueDate: new Date(dueDate),
    });

    await borrow.save();

    book.available -= 1;
    await book.save();

    res.json(borrow);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.returnBook = async (req, res) => {
  const { borrowId } = req.body;

  try {
    const borrow = await Borrow.findById(borrowId).populate("book");
    if (!borrow) {
      return res.status(404).json({ msg: "Borrow record not found" });
    }

    borrow.status = "returned";
    borrow.returnDate = new Date();
    await borrow.save();

    borrow.book.available += 1;
    await borrow.book.save();

    res.json(borrow);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
