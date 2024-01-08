const mongoose = require("mongoose");

const ListUser = async (req, res) => {
  const users = mongoose.model("users");

  const usersList = await users.find({});

  res.status(200).json({
    message: "All user are listed as below.",
    usersList,
  });
};
module.exports = ListUser;
