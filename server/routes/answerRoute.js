const express = require("express");
const router = express.Router();
const authHeader = require("../MiddleWare/authMiddleware");
const { postAnswer } = require("../controller/answerController");

router.post("/post-answers/:question_id", authHeader, postAnswer);
module.exports = router;
