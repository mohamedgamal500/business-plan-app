import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import appReducer from "./reducers/plan";
import { Provider } from "react-redux";

// store
const store = createStore(
  appReducer,
  // for redux debugging tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
