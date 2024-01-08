const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./modules/users/users.routes");
require("dotenv").config({ path: "./vars/.env" });

mongoose
  .connect(process.env.mongo_connect, {})
  .then(() => {
    console.log("MongoDB connected successfully.");
  })
  .catch((e) => {
    console.log("MongoDB connection failed.", e);
  });

app = express();

app.use(express.json());

require("./models/users.model");

app.use("/users", userRouter);

app.listen(8000, () => {
  console.log("Server started successfully");
});
