import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StoreList from './components/StoreList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fitting Room hub</h1>
        </header>
        <p className="App-intro">
        </p>
          <StoreList/>
      </div>
    );
  }
}

export default App;
