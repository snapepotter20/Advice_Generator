import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      advice: "",
      nextAdvice: false,
    };
  }
  componentDidMount() {
    console.log("component mounted");
    // this.fetchAdvice();
  }

  fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        const adviceUpdate = data.slip.advice;
        this.setState({ advice: adviceUpdate });
        if (!this.state.nextAdvice) this.setState({ nextAdvice: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="App">
        <div className="Card">
          <h2 className="heading">{this.state.advice}</h2>
          <button className="button" onClick={this.fetchAdvice}>
            {this.state.nextAdvice ? "Next advice!" : "GIVE ME ADVICE!"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
