import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, type }) => {
  console.log("books: ", books, type);
  return (
    <div>
      {books.map((book) => {
        return <BookCard book={book} type={type} />;
      })}
    </div>
  );
};

export default BookList;
