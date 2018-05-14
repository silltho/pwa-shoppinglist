import React from "react";
import ReactDOM from "react-dom";
/*import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'services/reducers'*/
import App from "./containers/App/index.jsx";

/*const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
)*/

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});
