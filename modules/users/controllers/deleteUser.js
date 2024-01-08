const mongoose = require("mongoose");

const deleteUser = async (req, res) => {
  const users = mongoose.model("users");
  const { _id } = req.query;
  try {
    if (!_id) throw "Please provide the id to delete.";
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error,
    });
    return;
  }
  await users.deleteOne({
    _id: _id,
  });

  res.status(200).json({
    message: "the user is deleted.",
  });
};

module.exports = deleteUser;
