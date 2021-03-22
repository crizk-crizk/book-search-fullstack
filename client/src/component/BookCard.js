import "./BookCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
  console.log(book);
  return (
    <div>
      {/* ------------ */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.image} alt="Book cover" />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <h5>Written By {book.authors.join(", ")}</h5>
            <p>{book.description}</p>
          </Card.Text>
          <Button variant="primary" onClick={handleBookView}>View
          </Button>

          <Button variant="primary"
              onClick={type === "search" ? handleBookSave : handleBookDelete}
            >
              {type === "search" ? "Save" : "Delete"}
            </Button>
        </Card.Body>
      </Card>
      {/* ------------ */}
    </div>
  );
};

export default BookCard;
