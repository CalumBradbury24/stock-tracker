import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase/firebase.utils";
import SplashScreen from "./Pages/SplashScreen/SplashScreen";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const App = ({ signOut, signInWithGoogle }) => {
  return (
    <Router className = 'App'>
      <Switch>
        <Route exact path="/">
          <SplashScreen signInWithGoogle={signInWithGoogle} />
        </Route>
        <Route exact path="/home">
          <HomePage signOut={signOut} />
        </Route>
      </Switch>
    </Router>
  );
};

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

