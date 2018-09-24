import React, { Component } from 'react';
import './App.css';

import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import CrossPad from './components/CrossPad';

let store = null;

class App extends Component {
  render() {
    return (
      <div className="App">
        <CrossPad/>
      </div>
    );
  }
}

export default App;
