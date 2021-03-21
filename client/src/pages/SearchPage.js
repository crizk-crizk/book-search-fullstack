import React from "react";
import Search from "../component/Search";
import { useStoreContext } from "../utils/GlobalState";
import BookList from "../component/BookList";

const SearchPage = () => {
  const [state] = useStoreContext();

  return (
    <div>
      <p>Search Page</p>
      <Search />
      <BookList books={state.list} type="search"/>
    </div>
  );
};

export default SearchPage;
