import React from "react";
import BookNav from "./BookNav";
import Jumbotron from "react-bootstrap/Jumbotron";

const Header = () => {
  return (
    <div>
      <BookNav />
      <Jumbotron className="text-center">
        <h1>Google Book Search</h1>
        <h3>
          Search for and Save Books of your Interest
        </h3>
      </Jumbotron>
    </div>
  );
};

export default Header;
