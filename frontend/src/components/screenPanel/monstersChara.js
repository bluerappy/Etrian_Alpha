import React, {Component} from 'react';
// import slimeImage from '../images/slime.png';
import nuclearSlime from '../../images/nuclearSlime.png';
import MonsterLifeBar from './monsterLifeBar'

const monsterStyle = {
    position: "absolute",
    left : "450px",
    top : "120px",
    textAlign: "center",
    color: "white"
  };

class MonstersChara extends Component {
    render() {
        console.log("image", this.props.monsterStats.monsterImage)
        if(this.props.monsterStats.monsterAppearance === true) {
          return (
            <div className="row">
              <div style={monsterStyle}>
                <img src={this.props.monsterStats.monsterImage} alt="monster" width="250" height="250" />
                  <p>{this.props.monsterStats.monsterName}</p>
                  <MonsterLifeBar monsterHealth={this.props.monsterStats.monsterHealth}>
                      <p>{this.props.monsterStats.monsterHealth}PV</p>
                  </MonsterLifeBar>
                  
              </div>
            </div>   
          );
        }
        else return (
          <div className="row"></div>   
        );
    }
}

export default MonstersChara;