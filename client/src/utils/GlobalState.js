import React, { createContext, useReducer, useContext } from "react";
import { LOADING, UPDATE_LIST, SAVED_LIST } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_LIST:
      return {
        ...state,
        list: action.list,
      };
    case SAVED_LIST:
      return {
        ...state,
        savedlist: action.list,
      };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    list: [],
    savedlist: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
