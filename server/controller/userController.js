// Database Connection
const db = require("../db/dbConfig");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
// Register Controller

// Login Controller
async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide all required fields" });
  }
  try {
    const [user] = await db.query(
      "SELECT username, user_id, password FROM registration WHERE email=?",
      [email]
    );
    if (user.length == 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Invalid Credential" });
    }

    // Compare password

    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Invalid Credential" });
    }
    const username = user[0].username;
    const userid = user[0].user_id;
    const token = jwt.sign({ username, userid }, "secret", { expiresIn: "1d" });
    return res
      .status(StatusCodes.OK)
      .json({ msg: "user Login Successful ", token, userid });
  } catch (error) {
    console.log(error.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong, try again later" });
  }
}

// Check user Controller

module.exports = { login };