import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Birds from './Birds';
import Turtles from './Turtles';
import Form from './Form';
// import Chart from './Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true
    };
  }

  toggleViewAdd = () => {
    this.setState({
      toggle: false
    });
  };

  toggleViewSearch = () => {
    this.setState({
      toggle: true
    });
  };

  render() {
    return (
      <div>
        <Nav
          toggleSearch={this.toggleViewSearch}
          toggleAdd={this.toggleViewAdd}
        />
        {/* <Chart /> */}
        {this.state.toggle && <Birds />}
        {this.state.toggle && <Turtles />}
        {!this.state.toggle && <Form />}
      </div>
    );
  }
}

export default App;
