import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import MainScreen from './containers/containerMain';
import MonsterAdd from './containers/forms/containerMonsterAdd';
import InfosPanel from './components/infosPanel/infosPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col>
           <MainScreen/>
          </Col>
          <Col>
          <InfosPanel/>
          </Col>
        </Row>
        <MonsterAdd/>
      
      </div>
    );
  }
}

export default App;
