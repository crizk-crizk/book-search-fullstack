import express from "express";
import { getBooks, addBook, deleteBook } from "../controllers/bookController.js";

const router = express.Router();

router.route("/")
.get(getBooks)
.post(addBook)

router.route("/:id")
.delete(deleteBook)

export default router;
