import React from "react";
import { Link } from "react-router-dom";

const BookNav = () => {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/saved">Saved Books</Link>
            </li>
            <li>
              <Link to="/">Search Books</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default BookNav;
