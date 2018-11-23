import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import MainScreen from './MainScreen';

class LoadingPage extends Component {

componentDidMount() {
    this.props.getMonstersList();
    this.props.getHeroesById();
};

  render () {
    if (!this.props.heroesList.data) {
      return (
        <div>
          <p>LOADING DATAS PLEASE WAIT</p>
      </div>
      )
    }
    return (
      <div>
        <Row>
          <Col>
           <MainScreen heroesList={this.props.heroesList} monstersList={this.props.monstersList}/>
          </Col>
        </Row>
      </div>
    )
  };
};

export default LoadingPage;