const express = require("express");
const router = express.Router();
const bookController = require("../controllers/BookController");
const auth = require("../middleware/auth"); // Middleware for authentication
const roleCheck = require("../middleware/roleCheck"); // Middleware for role-based access control

router.post(
  "/",
  auth,
  roleCheck(["Admin", "Librarian"]),
  bookController.addBook
);
router.put(
  "/",
  auth,
  roleCheck(["Admin", "Librarian"]),
  bookController.updateBook
);
router.delete(
  "/",
  auth,
  roleCheck(["Admin", "Librarian"]),
  bookController.deleteBook
);
router.get("/search", auth, bookController.searchBooks);

module.exports = router;
