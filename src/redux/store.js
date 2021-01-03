import { createStore } from "redux";
import reducer from "./uiReducers";

// This is the initial configuration for the react-redux store, also enables
//the Redux Dev Tools

const config =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, config);
  return store;
}
