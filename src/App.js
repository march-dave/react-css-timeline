import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import TimeLine from "./TimeLine";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeLine />
      </div>
    );
  }
}

export default App;
