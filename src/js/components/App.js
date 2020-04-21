import React from "react";
import { database, auth } from "../../../firebase";
import ReactDOM from "react-dom";
// for development only
import { hot } from "react-hot-loader";

//
import SignIn from "./SignIn";

class Welcome extends React.Component {
  state = {
    data: null,
    newData: "",
    currentUser: null,
  };

  handleChange = (event) => {
    const new_data = event.target.value;
    this.setState({
      newData: new_data,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // add or update "new greeting" key in db
    database.ref().child("New Greeting").set(this.state.newData);
  };

  // component update before loading dom
  componentDidMount = async () => {
    // listen for any change("/" => root) in the db and return a snapshot
    const starCountRef = await database.ref("/").on("value", (snapshot) => {
      // everytime a change occurs in the db, it will be logged to console
      console.log("Data changed", snapshot.val());

      this.setState({
        data: snapshot.val(),
      });
    });

    auth.onAuthStateChanged((currentUser) => {
      console.log("AUTH_CHANGE", currentUser);
      this.setState({ currentUser });
    });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <h1>{JSON.stringify(this.state.data, null, 2)} world</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newData}
          />
          <input type="submit" />
        </form>
        {!currentUser && <SignIn />}
        {currentUser && `${currentUser.email} is logged in.`}
      </div>
    );
  }
}

export default hot(module)(Welcome);
