import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
dotenv.config();
const app = express();
console.log();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRouter);

app.get("/", (req, res) => {});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
