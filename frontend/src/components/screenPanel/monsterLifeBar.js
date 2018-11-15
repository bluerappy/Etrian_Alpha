import React, {Component} from 'react';
import { Progress } from 'reactstrap';

class MonsterLifeBar extends Component {
  constructor() {
    super();
    this.state = {
      monsterHealth : null,
    };
  }

  componentDidMount(){
    this.setState({monsterHealth : this.props.monsterHealth})
  }

  lifeBar = () => {
    let fullLife = this.props.monsterHealth;
    let remainingLife = this.state.monsterHealth;
    const newLife = Math.floor(( fullLife/ remainingLife ) * 100);
    if (newLife <= 20) {
      return (
        <Progress color="danger" value={newLife}>{this.props.monsterHealth}</Progress>
      )
    } else if (newLife <= 40) {
      return (
        <Progress color="warning" value={newLife}>{this.props.monsterHealth}</Progress>
      )
    } else if (newLife <= 60) {
      return (
        <Progress color="success" value={newLife}>{this.props.monsterHealth}</Progress>
      )
    } else if (newLife <=100) {
      return (
        <Progress value={newLife}>{this.props.monsterHealth}</Progress>
      )
    }
  }

  render () {
    return (
      <div>
           {this.lifeBar()}
      </div>
    )
  }
}

export default MonsterLifeBar;