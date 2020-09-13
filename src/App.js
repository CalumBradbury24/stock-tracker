import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase/firebase.utils";
import SplashScreen from "./Pages/SplashScreen/SplashScreen";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const App = ({ user, signOut, signInWithGoogle }) => {
  return (
    <div>
      <Router>
        {!user ? (
         <Route
           
         path="/"
         render={() => <SplashScreen signInWithGoogle={signInWithGoogle} />}
       /> 
        ) : (
          
          <Route
            exact
            path="/home"
            render={() => <HomePage signOut={signOut} />}
          />
        )}
      </Router>
    </div>
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
