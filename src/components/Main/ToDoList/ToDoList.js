import React, { Component } from "react";
import PropTypes from "prop-types";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

export class ToDoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        <ToDoItem
          array={this.props.array}
          toggleComplete={this.props.toggleComplete}
          deleteNote={this.props.deleteNote}
        />
      </ul>
    );
  }
}

ToDoList.propTypes = {
  array: PropTypes.array,
  toggleComplete: PropTypes.func,
  deleteNote: PropTypes.func,
};

export default ToDoList;
