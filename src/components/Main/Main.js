import React, { Component } from "react";
import ToDoInput from "./ToDoInput/ToDoInput";
import ToDoList from "./ToDoList/ToDoList";
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
    let toPush = this.state.array.concat({
      id: this.counter,
      name: data,
      time: new Date().toLocaleString(),
      complete: false,
    });
    this.setState({ array: toPush });
    this.counter++;
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

  render() {
    return (
      <main className="todo-main">
        <ToDoInput updateMain={this.updateMain} value={this.state.value} />
        <ToDoList
          array={this.state.array}
          toggleComplete={this.toggleComplete}
        />
      </main>
    );
  }
}

export default Main;
