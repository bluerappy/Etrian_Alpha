import React, { Component } from 'react';
import './App.css';
import MainScreen from './containers/containerMain';
import MonsterAddForm from './containers/forms/containerMonsterAddForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainScreen/>
        <MonsterAddForm/>
      </div>
    );
  }
}

export default App;
