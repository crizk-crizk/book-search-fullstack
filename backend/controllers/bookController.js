import Book from "../models/bookModel.js";
import asyncHandler from "express-async-handler";

// @Desc get all books
// @Routes GET /api/books
// @Access public
const getBooks = async (req, res) => {
  console.log(req.params);
  const books = await Book.find({});
  res.json(books);
};

// @Desc add a book
// @Routes POST /api/books
// @Access public
const addBook = async (req, res) => {
  const { title, authors, description, image, link } = req.body;
  console.log(req.body);
  //query to add a book
  try {
    const bookExist = await Book.findOne({ title });
    if (bookExist) {
      console.log("hi");
      res.status(400).json({
        message: "Book already saved",
        id: bookExist._id,
        book: req.body,
      });
    }
    const book = await Book.create({
      title,
      authors,
      description,
      image,
      link,
    });
    if (book) {
      res.status(201).json({
        message: "Book added",
        id: book._id,
      });
    } else {
      res.status(400).json({
        message: "Error",
        book: req.body,
      });
    }
  } catch (error) {
    console.error(error)
    res.status(400).json({
      message: "Error",
      book: req.body,
    });
  }
};

// @Desc delete a book
// @Routes DELETE /api/books/:id
// @Access public
const deleteBook = async (req, res) => {
  console.log(req.params);
  //query to delete a book
  try {
    const deleteThisBook = await Book.deleteOne({ _id: req.params.id });
    console.log(deleteThisBook);
    if (deleteThisBook.deletedCount === 1) {
      res.status(201).json({
        message: "Book deleted",
        id: req.params.id,
      });
    } else {
      res.status(404).json({
        message: "No book found with that ID",
        id: req.params.id,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Invalid ID",
      id: req.params.id,
    });
  }
};

export { getBooks, addBook, deleteBook };
