import React, { Component } from "react";
import { auth, googleAuthProvider } from "../../../firebase";

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Sign In
        </button>
      </div>
    );
  }
}
