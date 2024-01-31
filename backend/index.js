import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import booksRoute from "./routes/booksRoute.js";
dotenv.config();

const app = express();
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

// ...........................middlewares................
// necessary to run code
app.use(express.json());

// routes
app.use("/api/books", booksRoute);

// ...........................app listening....................
app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});
