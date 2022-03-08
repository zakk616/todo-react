import React from "react";
import Note from "./Note";

import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h4>Todo Notes</h4>
        </div>

        <Note text="some text" />
      </div>
    );
  }
}
