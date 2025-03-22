const express = require("express");
const app = express();
const cors = require("cors");
const port = 2017;
const { StatusCodes } = require("http-status-codes");

// Database Connection
const db = require("./db/dbConfig");
app.use(cors());

// json middleware to extract json data
app.use(express.json());

//Importing userRoutes

// Importing answerRoute

//Importing questionRoutes

// user route middleware

// Question route middleware

// Answers Route middleware
app.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "It is working" });
});


async function start() {
  try {
    await app.listen(port);
    console.log("Database Connected Successfully");
    console.log(`Server is Listenning on http://localhost:${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();