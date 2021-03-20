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
const addBook = asyncHandler( async (req, res) => {
  const { title, authors, description, image, link } = req.body;
  console.log(req.body);
  //query to add a book
  const bookExist = await Book.findOne({ title: req.body.title });
  if (bookExist) {
    res.status(400).send("Book already saved");
  }
  const book = await Book.create({ title, authors, description, image, link });
  if (book) {
    res.status(201).json({
      message: "Book added",
      id: book._id,
    });
  } else {
    res.status(400).send("Invalid book data");
  }
});

// @Desc delete a book
// @Routes DELETE /api/books/:id
// @Access public
const deleteBook = async (req, res) => {
  console.log(req.params);
  //query to delete a book
  res.json("book deleting");
};

export { getBooks, addBook, deleteBook };
