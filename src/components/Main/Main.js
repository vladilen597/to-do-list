import React, { Component } from "react";
import ToDoInput from "./ToDoInput/ToDoInput";
import ToDoList from "./ToDoList/ToDoList";
import PropTypes from "prop-types";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.counter = 4;
    this.state = {
      array: [
        {
          id: 1,
          name: "Купить молоко",
          time: "4/26/2021, 6:23:12 AM",
          complete: false,
        },
        {
          id: 2,
          name: "Купить хлеб",
          time: "4/27/2021, 12:23:12 PM",
          complete: false,
        },
        {
          id: 3,
          name: "Закончить стажировку",
          time: "3/12/2021, 3:45:27 PM",
          complete: false,
        },
      ],
    };
  }

  updateMain = (data) => {
    let toPush = {
      id: this.counter,
      name: data,
      time: new Date().toLocaleString(),
      complete: false,
    };
    localStorage.setItem(localStorage.length, JSON.stringify(toPush));
    this.setState({ array: [toPush, ...this.state.array] });
    this.counter++;
  };

  deleteNote = (id) => {
    console.log(this.state.array);
    let tempArray = [];
    this.state.array.filter((item) => {
      if (item.id != id) {
        tempArray.push(item);
      }
    });
    this.setState({
      array: tempArray,
    });
  };

  toggleComplete = (id) => {
    this.setState({
      array: this.state.array.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
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
      toPush.push(localStorage.getItem(i));
    }
    this.setState({ array: toPush });
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
