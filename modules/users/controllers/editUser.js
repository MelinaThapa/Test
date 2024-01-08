const mongoose = require("mongoose");
const editUser = async (req, res) => {
  const users = mongoose.model("users");

  const { _id, name, email, password, address } = req.body;

  try {
    if (!_id) throw "please provide the id of user.";
  } catch (error) {
    res.status(200).json({
      status: "failed",
      error: error.message,
    });
    return;
  }
  try {
    await users.updateOne(
      {
        _id: _id,
      },
      {
        name,
        email,
        password,
        address,
      },
      {
        runValidators: true,
      }
    );
  } catch (e) {
    res.status(200).json({
      status: "failed",
      error: e.message,
    });
    return;
  }

  res.status(200).json({
    message: "the user is edited.",
  });
};
//malai number lai edit garna aayena

module.exports = editUser;
