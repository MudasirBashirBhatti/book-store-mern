import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

// if mongoDB suddenly disconnected it will inform
mongoose.connection.on("Disconnected", () => {
  console.log("mongoDB disconnected");
});

const app = express();
app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});
