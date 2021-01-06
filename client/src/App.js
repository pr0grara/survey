import React, { Component } from "react";
import "./App.css";
import { fetchFlower } from "./util/api/flower_api_util.js"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flower: {},
    };
    this.getFlower();
  }
  getFlower() {
    // fetch("/flower")
    fetchFlower()
      // .then((res) => console.log(res.data))
      // .then((res) => res.json())
      .then((res) => {
        this.setState({
          flower: res.data,
        });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.flower.name}</h1>
        <p>{this.state.flower.color}</p>
      </div>
    );
  }
}
export default App;
