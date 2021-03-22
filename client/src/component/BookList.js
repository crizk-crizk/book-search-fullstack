import React from "react";
import BookCard from "./BookCard";
import Row from "react-bootstrap/Row";

const BookList = ({ books, type }) => {
  console.log("books: ", books, type);
  return (
    <Row>
      {books.map((book) => {
        return <BookCard book={book} type={type} />;
      })}
    </Row>
  );
};

export default BookList;
