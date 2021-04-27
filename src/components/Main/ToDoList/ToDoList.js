import React, { Component } from "react";
import PropTypes from "prop-types";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

export class ToDoList extends Component {
  render() {
    return (
      <section>
        <ToDoItem
          array={this.props.array}
          toggleComplete={this.props.toggleComplete}
        />
      </section>
    );
  }
}

ToDoList.propTypes = {
  array: PropTypes.array,
  toggleComplete: PropTypes.func,
};

export default ToDoList;
