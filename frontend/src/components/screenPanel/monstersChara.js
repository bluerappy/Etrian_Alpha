import React, {Component} from 'react';
// import slimeImage from '../images/slime.png';
import nuclearSlime from '../../images/nuclearSlime.png';

const monsterStyle = {
    position: "absolute",
    left : "450px",
    top : "120px",
    textAlign: "center",
    color: "white"
  };

class MonstersChara extends Component {
    render() {
        // console.log("MA", this.props.monsterStats)
        if(this.props.monsterStats.monsterAppearance === true) {
          return (
            <div className="row">
              <div style={monsterStyle}>
                <img src={nuclearSlime} alt="monster" width="250" height="250" />
                  <p>{this.props.monsterStats.monsterHealth}PV</p>
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