const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user.js");

const app = express();
const port = 3001;

//middleware
app.use(express.json());
app.use("/api", userRoutes);

//routes
app.get("/", (req, res) => {
  res.send("All ok!");
});

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conected to mongodb atlas"))
  .catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
