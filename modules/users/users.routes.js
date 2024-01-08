const express = require("express");
const createUser = require("./controllers/createUser");
const ListUser = require("./controllers/ListUser");
const specificUser = require("./controllers/specificUser");
const editUser = require("./controllers/editUser");
const deleteUser = require("./controllers/deleteUser");
const userRouter = express.Router();

userRouter.post("/create", createUser);
userRouter.get("/list", ListUser);
userRouter.get("/listSpecific", specificUser);
userRouter.patch("/edit", editUser);
userRouter.delete("/delete", deleteUser);

module.exports = userRouter;
