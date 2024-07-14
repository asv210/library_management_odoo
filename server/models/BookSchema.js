const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  isbn: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: String,
  year: String,
  genre: String,
  quantity: { type: Number, default: 1 },
  available: { type: Number, default: 1 },
  category: String,
});

module.exports = mongoose.model("Book", bookSchema);
