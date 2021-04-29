import React, { Component } from "react";
import ToDoButton from "../ToDoButton/ToDoButton";
import "./ToDoInput.css";
import PropTypes from "prop-types";

class ToDoInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handlePress(event) {
    if (event.key == "Enter") {
      this.props.updateMain(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <section className="todo-add-new">
        <input
          placeholder="Введите вашу цель"
          type="text"
          className="todo-input"
          onChange={this.handleChange}
          onKeyUp={this.handlePress}
        />
        <ToDoButton
          updateMain={() => {
            this.props.updateMain(this.state.value);
          }}
          value={this.state.value}
        />
      </section>
    );
  }
}

ToDoInput.propTypes = {
  updateMain: PropTypes.func,
  value: PropTypes.string,
};

export default ToDoInput;
