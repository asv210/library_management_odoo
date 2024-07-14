const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5004;
const connectDB = require("./config/db");
const UserRoute = require("./routes/UserRoute");
const BookRoute = require("./routes/BookRoute");
// Connect Database
connectDB();

// Body Parser Middleware
app.use(bodyParser.json());

app.use("/api/users", UserRoute);
app.use("/api/books", BookRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});