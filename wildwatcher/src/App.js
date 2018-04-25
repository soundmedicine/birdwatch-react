import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Birds from './Birds';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Birds />
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to Your Life.</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
