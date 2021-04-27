import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ToDoItem.css";

export class ToDoItem extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.array.map((a) => {
          return (
            <li
              style={{
                textDecoration: this.props.array.complete ? "line-through" : "",
              }}
              onClick={this.props.toggleComplete(a.id)}
              className="todo-list-item"
              key={a.id}
            >
              {a.name} <br />
              {a.time}
            </li>
          );
        })}
      </ul>
    );
  }
}

ToDoItem.propTypes = {
  array: PropTypes.array,
  toggleComplete: PropTypes.func,
};

export default ToDoItem;
