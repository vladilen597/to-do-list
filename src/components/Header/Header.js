import { React, Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {
    date: "",
  };

  getDate() {
    let date = new Date().toLocaleString();

    this.setState({
      date: date,
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getDate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="header">
        <h1>ToDo List</h1>
        <div className="date">{this.state.date}</div>
      </div>
    );
  }
}

export default Header;
