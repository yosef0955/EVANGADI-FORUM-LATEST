const express = require("express");
const router = express.Router();
const authHeader = require("../MiddleWare/authMiddleware");

const { login } = require("../controller/userController");

// Register route

// Login route
router.post("/login", login);
// Check user

module.exports = router;