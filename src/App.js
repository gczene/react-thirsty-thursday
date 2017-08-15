import React, { Component } from 'react';
import logo from './beer.png';
import './App.css';
import Order from './components/order';
import InProgress from './components/in-progress';

class App extends Component {
  render() {
    return (
      <div>
        <Order />
        <InProgress />
      </div>
    );
  }
}

export default App;
