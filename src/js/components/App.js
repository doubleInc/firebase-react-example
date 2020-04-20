import React from "react";
import { database } from "../../../firebase";
import ReactDOM from "react-dom";

export default class Welcome extends React.Component {
  state = {
    data: null,
  };

  // component update before loading dom
  componentDidMount = async () => {
    // listen for any change("/" => root) in the db and return a snapshot
    const starCountRef = await database.ref("/").on("value", (snapshot) => {
      // everytime a change occurs in the db, it will be logged to console
      console.log("Data changed", snapshot.val());
    });

    console.log(starCountRef);
  };

  render() {
    return <h1>Hello world</h1>;
  }
}
