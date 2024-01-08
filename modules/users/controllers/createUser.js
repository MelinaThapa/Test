const mongoose = require("mongoose");

const createUser = async (req, res) => {
  const users = mongoose.model("users");
  const { name, mobileNo, email, password, address } = req.body;

  let createdUser;

  try {
    createdUser = await users.create({
      name,
      mobileNo,
      email,
      password,
      address,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
    return;
  }

  //if everything went fine
  res.status(200).json({
    status: "user is created.",
    createdUser: createdUser,
  });
};
module.exports = createUser;
