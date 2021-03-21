import React, {useEffect} from "react";
import BookList from "../component/BookList";
import { SAVED_LIST } from "../utils/actions";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

const SavedPage = () => {
  const [state, dispatch] = useStoreContext();

  const updateSavedList = () => {
    API.getSavedBooks().then((result) => {
      dispatch({
        type: SAVED_LIST,
        list: result,
      });
    });
  };

  useEffect(() => {
    //update the saved list
    updateSavedList();
  });

  return (
    <div>
      <p>Saved Books</p>
      <BookList books={state.savedlist} />
    </div>
  );
};

export default SavedPage;
