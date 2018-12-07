import React, {Component} from 'react';
import armorImage from '../../images/armor.png'
import helmetImage from '../../images/helmet.png';
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

const armorStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '220px',
  position: "absolute",
};

const helmetStyle = {
  display: 'block',
  marginRight: 'auto',
  marginLeft : '41px',
  marginTop: '100px',
  position: "absolute",
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

          <div> 
            <img style={helmetStyle} src={helmetImage} alt="helmet" width="120" height="120" />
          </div>
          <div> 
            <img style={armorStyle} src={armorImage} alt="armor" width="200" height="200" />
          </div>
        </div>
        );
    }
}

export default InfosPanel;