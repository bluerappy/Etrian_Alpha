import React, {Component} from 'react';
// import { Row, Col } from 'reactstrap';

const divStyle = {
    borderRadius: "8px",
    border: '4px solid grey',
    padding: "20px",
    width: "400px",
    height: "745px",
    backgroundColor: "white"
  };

const pStyle = {
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: 'bold'
  };

class InfosPanel extends Component {
    render() {
      return (
        <div style={divStyle}>
          <div>
            <p style={pStyle}>Infos Panel</p>
            <p>Hero Name : {this.props.heroesData.name}</p>
            <p>Level : {this.props.heroesData.level}</p>
            <p>Power : {this.props.heroesData.power}</p>
            <p>Experience : {this.props.heroesData.experiencePoints} / {this.props.heroesData.experienceForLevelUp}</p>
          </div>
          <div>
            <hr/>
            <p>Status : {this.props.heroesData.status}</p>
          </div>
        </div>
        );
    }
}

export default InfosPanel;