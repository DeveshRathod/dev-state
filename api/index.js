import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("Server started!");
});
