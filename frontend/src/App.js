import React, { Component } from 'react';
import './App.css';
import MainScreen from './containers/containerMain';
import MonsterAddForm from './containers/forms/containerMonsterAddForm';
import MonsterAdd from '../src/components/forms/monsterAdd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainScreen/>
        <MonsterAddForm/>
        <MonsterAdd/>

      </div>
    );
  }
}

export default App;
