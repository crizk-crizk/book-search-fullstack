import axios from "axios";
import React from "react";
import API from "../utils/API";

const BookCard = ({ book, type }) => {
  const handleBookSave = (event) => {
    event.preventDefault();
    axios.post("/api/books", book);
  };

  const handleBookView = (event) => {
    event.preventDefault();
    window.open(book.link);
  };

  const handleBookDelete = () => {
    API.deleteSavedBook(book._id);
  };

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>Written By {book.authors.join(", ")}</h3>

      <img
        src={book.image}
        alt="Book cover"
      />

      <p>{book.description}</p>

      <button onClick={handleBookView}>View</button>

      <button onClick={type === "search" ? handleBookSave : handleBookDelete}>
        {type === "search" ? "Save" : "Delete"}
      </button>
    </div>
  );
};

export default BookCard;
