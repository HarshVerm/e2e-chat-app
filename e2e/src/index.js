import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import rootReducers from "./store/reducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
