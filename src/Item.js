import React from "react";
import "./styles.css";

export default class Item extends React.Component {
  render() {
    return (
      <div className="note">
        <div className="controls">
          <button className="fas fa-pen btn edit"></button>
          <button
            className="fas fa-xmark btn del"
            onClick={() => {
              this.props.sendData(this.props.id);
            }}
          ></button>
        </div>
        <p className="text">{this.props.text}</p>
      </div>
    );
  }
}
