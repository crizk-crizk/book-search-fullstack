import React, { useRef } from 'react'
import { useStoreContext } from "../utils/GlobalState";
import { LOADING, UPDATE_LIST } from '../utils/actions';
import API from '../utils/API'

const Search = () => {
  const searchRef = useRef();
  const [state, dispatch] = useStoreContext();
  console.log("state on Search.js:", state);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({type: LOADING});
    API.getBooks(searchRef.current.value)
    .then(result =>{
      dispatch({
        type: UPDATE_LIST,
        list: result
      })
    })
    searchRef.current.value = "";
  }

  return (
    <div>
      <h3>Book Search</h3>
      <form onSubmit={handleSubmit}>
      <input ref={searchRef}>
      </input>
      <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
