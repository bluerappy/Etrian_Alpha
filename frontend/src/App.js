import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import MonsterAdd from './containers/forms/containerMonsterAdd';
import LoadingPage from './containers/containerLoading';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col>
           {/* <MainScreen/> */}
           <LoadingPage/>
          </Col>
        </Row>
        <MonsterAdd/>
      
      </div>
    );
  }
}

export default App;
