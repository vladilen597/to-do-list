import React, { Component } from "react";
import ToDoInput from "./ToDoInput/ToDoInput";
import ToDoList from "./ToDoList/ToDoList";
import PropTypes from "prop-types";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.counter = localStorage.length;
    this.state = {
      array: [],
    };
  }

  updateMain = (data) => {
    let toPush = {
      id: localStorage.length,
      name: data,
      time: new Date().toLocaleString(),
      complete: false,
    };
    localStorage.setItem(localStorage.length, JSON.stringify(toPush));
    this.setState({ array: [...this.state.array, toPush] });
  };

  deleteNote = (id) => {
    console.log(this.state.array);
    let tempArray = [];
    this.state.array.filter((item) => {
      if (item.id != id) {
        tempArray.push(item);
      }
    });
    localStorage.clear();
    for (let i = 0; i < tempArray.length; i++) {
      tempArray[i].id = i;
      localStorage.setItem(i, JSON.stringify(tempArray[i]));
    }
    this.setState({
      array: tempArray,
    });
  };

  toggleComplete = (id) => {
    this.setState({
      array: this.state.array.map((item) => {
        if (item.id === id) {
          item.complete = !item.complete;
          localStorage.setItem(id, JSON.stringify(item));
          return {
            ...item,
            complete: item.complete,
          };
        } else {
          return item;
        }
      }),
    });
  };

  componentDidMount() {
    let toPush = [];
    for (let i = 0; i < localStorage.length; i++) {
      toPush.push(JSON.parse(localStorage.getItem(i)));
    }
    this.setState({
      array: toPush,
    });
  }

  render() {
    return (
      <main className="todo-main">
        <ToDoInput updateMain={this.updateMain} value={this.state.value} />
        <ToDoList
          array={this.state.array}
          toggleComplete={this.toggleComplete}
          deleteNote={this.deleteNote}
        />
      </main>
    );
  }
}

Main.propTypes = {
  array: PropTypes.array,
};

export default Main;
