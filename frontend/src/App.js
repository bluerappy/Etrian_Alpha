import React, { Component } from 'react';
import './App.css';
import MainScreen from './containers/containerMain';
import MonsterAdd from './containers/forms/containerMonsterAdd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainScreen/>
        <MonsterAdd/>
      </div>
    );
  }
}

export default App;
