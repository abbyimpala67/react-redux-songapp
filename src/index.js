import { Provider } from "react-redux";
import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reducers from "./reducers";

//wrap App component inside Provider component and pass a prop createStore(reducers)
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
