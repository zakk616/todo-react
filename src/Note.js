import React from "react";
import Item from "./Item";
import "./styles.css";

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      textbox: React.createRef()
    };
    this.addItem = this.addItem.bind(this);
  }

  checkDuplicate(text) {
    return this.state.items.some(function (el) {
      return el.text === text;
    });
  }

  addItem() {
    let text = this.state.textbox.current.value;
    if (text === "") {
      alert("can not add empty note");
    } else if (this.checkDuplicate(text)) {
      alert("can not add duplicate");
    } else {
      const data = {
        id: new Date().getTime().toString(),
        text: this.state.textbox.current.value
      };
      this.state.items.push(data);
      this.setState({ items: this.state.items });
    }
    // this.setState({ textbox.current.value: "" });
    this.state.textbox.current.value = "";
  }

  handleDelete = (id) => {
    const Olditems = [...this.state.items];
    const items = Olditems.filter((element, i) => {
      return i !== id;
    });
    this.setState({ items: items });
  };

  render() {
    return (
      <div>
        <div className="text-control">
          <input className="textbox" ref={this.state.textbox} type="text" />
          <button
            className="fas fa-plus btn add"
            onClick={this.addItem}
          ></button>
        </div>
        {this.state.items.map((item, i) => (
          <Item key={i} text={item.text} id={i} sendData={this.handleDelete} />
        ))}
      </div>
    );
  }
}
