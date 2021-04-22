import React, { Component } from "react";
import "./App.css";
import GetUser from "./GetUser";


class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <GetUser/>
      </div>
    );
  }
}

export default App;