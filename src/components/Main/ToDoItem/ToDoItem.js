import React from "react";
import PropTypes from "prop-types";
import "./ToDoItem.css";
import trashcanLogo from "../../../resourses/trashcan.png";

function ToDoItem(props) {
  return (
    <ul className="todo-list">
      {props.array.map((item) => {
        return (
          <li
            key={item.id}
            className="todo-list-item"
            style={{ backgroundColor: item.complete ? "lime" : "" }}
          >
            <div
              className="todo-list-item-line"
              onClick={() => {
                props.toggleComplete(item.id);
              }}
            >
              <div className="todo-name">
                {item.name} <br />
                {item.time}
              </div>
            </div>
            <button
              className="delete-button"
              onClick={() => {
                props.deleteNote(item.id);
              }}
            >
              <img className="delete-button-picture" src={trashcanLogo} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ToDoItem.propTypes = {
  array: PropTypes.array,
  toggleComplete: PropTypes.func,
  deleteNote: PropTypes.func,
};

export default ToDoItem;
