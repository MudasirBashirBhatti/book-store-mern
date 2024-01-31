import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

const app = express();
app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});
