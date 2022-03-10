import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
// import 'dotenv/config' ;


const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider domain='dev--ibr4jks.us.auth0.com' clientId='x7fBj6TbFrRqahi0tfvXg4fVOjWsueC6' redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);