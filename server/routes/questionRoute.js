const express = require("express");
const router = express.Router();
const authHeader = require("../MiddleWare/authMiddleware");
const {
  allQuestions,
  postQuestion,
} = require("../controller/questionController");
router.get("/all-questions", authHeader, allQuestions);
router.post("/post-question", authHeader, postQuestion);
module.exports = router;
