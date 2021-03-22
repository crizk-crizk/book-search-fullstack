import "./BookCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";
import axios from "axios";
import React, { useState, useRef } from "react";
import API from "../utils/API";

const BookCard = ({ book, type }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const handleBookSave = (event) => {
    setShow(!show);
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
    <Col lg="3" className="bookCardWrapper">
      {/* ------------ */}
      <Card className="bookCard">
        <Card.Img
          variant="top"
          src={book.image}
          alt="Book cover"
          className="bookCardImg"
        />
        <Card.Body>
          <Card.Title className="bookCardTitle">{book.title}</Card.Title>
          <Card.Text>
            <h5 className="bookCardAuthor">
              Written By {book.authors?.join(", ")}
            </h5>
            <p className="bookCardDescription">{book.description}</p>
          </Card.Text>
          <Button
            className="viewButton"
            variant="primary"
            onClick={handleBookView}
          >
            View
          </Button>

          <Button
            ref={target}
            variant="primary"
            onClick={type === "search" ? handleBookSave : handleBookDelete}
          >
            {type === "search" ? "Save" : "Delete"}
          </Button>
          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Book Saved!
              </Tooltip>
            )}
          </Overlay>
        </Card.Body>
      </Card>
      {/* ------------ */}
    </Col>
  );
};

export default BookCard;
