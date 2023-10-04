import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      advice: "",
      nextAdvice:false,
    };
  }
  componentDidMount() {
    console.log("component mounted");
    // this.fetchAdvice();
  }

  fetchAdvice = () => {
    if(!this.state.nextAdvice)
     this.setState({nextAdvice:true});
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
         return response.json();
      })
      .then((data)=>{
        console.log('data',data)
        const adviceUpdate=data.slip.advice;
         this.setState({advice:adviceUpdate})
      })
      .catch((error) => {
         
      });
  };
  render() {
    return (
      <div className="App">
        <div className="Card">
         <h2 className="heading">{this.state.advice}</h2>
         <button className="button" onClick={this.fetchAdvice}>
          { this.state.nextAdvice ? <span>Next advice!</span>:<sapn>GIVE ME ADVICE!</sapn>}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
