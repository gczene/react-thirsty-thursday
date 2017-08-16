import React, { Component } from 'react';
import logo from './beer.png';
import './App.css';
import Order from './components/order';
import InProgress from './components/in-progress';
import Summary from './components/summary';
import socket from './utils/socket';

class App extends Component {
  state = {
    focused: 0
  }
  componentDidMount() {
    window.addEventListener('focus', () => {
      socket.emit('RECONNECT');
    })
  }
  render() {
    return (
      <div>
        <span style={{background: 'white'}}>focused: {this.state.focused}</span>
        <Order />
        <InProgress />
        <Summary />
      </div>
    );
  }
}

export default App;
