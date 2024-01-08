const mongoose = require("mongoose");

const specificUser = async (req, res) => {
  const users = mongoose.model("users");
  const { _id } = req.query;
  console.log(_id);

  const usersList = await users.findById(req.query._id);

  if (!usersList)
    return res.status(404).json({
      message: "The user with such id was not found.",
    });

  //   if (!usersList)
  //     return res.status(404).json({
  //       message: "The user with such id was not found.",
  //     });

  res.status(200).json({
    message: "All user are listed as below.",
    usersList,
  });
};
module.exports = specificUser;

// router.get("/:id", async (req, res) => {
//   const user = await User.findById(req.query.id);
//   if (!user)
//     return res.status(404).send("The user with the given ID was not found.");
//   res.send(user);
// });
