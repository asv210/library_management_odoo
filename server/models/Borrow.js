const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const borrowSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  borrowDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  returnDate: { type: Date },
  status: { type: String, enum: ["borrowed", "returned"], default: "borrowed" },
});

module.exports = mongoose.model("Borrow", borrowSchema);
