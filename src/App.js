import React, { Component } from 'react';
import logo from './beer.png';
import './App.css';
import Order from './components/order';
import InProgress from './components/in-progress';
import Summary from './components/summary';
import socket from './utils/socket';

class App extends Component {
  componentDidMount() {
    window.addEventListener('focus', () => {
      socket.emit('RECONNECT');
    })
  }
  render() {
    return (
      <div>
        <Order />
        <InProgress />
        <Summary />
      </div>
    );
  }
}

export default App;
