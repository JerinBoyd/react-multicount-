import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
      
    }
    this.increment = this.increment.bind(this);
    this.increment2 = this.increment2.bind(this);
    this.increment3 = this.increment3.bind(this); 
    this.reset = this.reset.bind(this);
  }
  increment(){
    this.setState({count: this.state.count + 1}); 
  }
  increment2(){
    this.setState({count: this.state.count + 2}); 
  }
  increment3(){
    this.setState({count: this.state.count + 3}); 
  }
  reset(){
    this.setState({count: 0});
  }
  
 render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>1</button>
        <button onClick={this.increment2}>2</button>
        <button onClick={this.increment3}>3</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
