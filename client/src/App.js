import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const socketIo = require("socket.io");
var P2P = require('socket.io-p2p');
var io = require('socket.io-client');
var socket = io();
var p2p = new P2P(socket);
p2p.on('peer-msg', function (data) {
  console.log('From a peer %s', data);
});



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
