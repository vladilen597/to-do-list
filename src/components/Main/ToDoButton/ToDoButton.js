import React, { Component } from "react";
import "./ToDoButton.css";
import PropTypes from "prop-types";

class ToDoButton extends Component {
  render() {
    return (
      <button
        className="todo-add-button"
        onClick={() => {
          this.props.updateMain(this.props.value);
        }}
      >
        Добавить
      </button>
    );
  }
}

ToDoButton.propTypes = {
  updateMain: PropTypes.func,
  value: PropTypes.string,
};

export default ToDoButton;
