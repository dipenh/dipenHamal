import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "styles/app.scss";
import "styles/icons.css";

import { Provider } from "react-redux";
import { compose, combineReducers, createStore } from "redux";
import { firebaseReducer, reactReduxFirebase } from "react-redux-firebase";
import firebase from "firebase";

// CONTAINERS
import Container from "Container/Container";

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
});

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB1R4E9kjFbTrci61C1unCbTeuvoEIjhuw",
  authDomain: "dipen-hamal.firebaseapp.com",
  databaseURL: "https://dipen-hamal.firebaseio.com",
  storageBucket: "dipen-hamal.appspot.com"
};
firebase.initializeApp(firebaseConfig);

// react-redux-firebase options
const config = {
  userProfile: "users", // firebase root where user profiles are stored
  enableLogging: false // enable/disable Firebase's database logging
};

// Add redux Firebase to compose
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, config))(
  createStore
);

// Create store with reducers and initial state
const store = createStoreWithFirebase(rootReducer);
const routes = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Container} />
    </Router>
  </Provider>
);

render(routes, document.getElementById("app"));
