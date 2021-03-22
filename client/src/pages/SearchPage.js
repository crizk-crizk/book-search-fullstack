import React from "react";
import Search from "../component/Search";
import { useStoreContext } from "../utils/GlobalState";
import BookList from "../component/BookList";
import Container from "react-bootstrap/Container";


const SearchPage = () => {
  const [state] = useStoreContext();

  return (
    <Container fluid>
      <p>Search Page</p>
      <Search />
      <BookList books={state.list} type="search"/>
    </Container>
  );
};

export default SearchPage;
