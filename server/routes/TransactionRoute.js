const express = require("express");
const router = express.Router();
const TransactionController = require("../controllers/TransactionController");
const auth = require("../middleware/auth");

router.post("/borrow", auth, TransactionController.borrowBook);
router.post("/return", auth, TransactionController.returnBook);

module.exports = router;
