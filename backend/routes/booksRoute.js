import express from "express";
import Books from "../models/books.model.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const newBook = new Books(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
