const dbConnection = require("../db/dbConfig");
const { StatusCodes } = require("http-status-codes");

const postAnswer = async (req, res) => {
  const { answer } = req.body;
  const { question_id } = req.params;
  // Validate request body
  if (!question_id || !answer) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: "Bad Request",
      message: "Please provide answer",
    });
  }

  try {
    // Insert the answer into the database
    const userid = req.user.userid;
    await dbConnection.query(
      "INSERT INTO answers (user_id,question_id, answer) VALUES (?,?,?)",
      [userid, question_id, answer]
    );

    return res.status(StatusCodes.CREATED).json({
      message: "Answer posted successfully",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
};


module.exports = { postAnswer };
