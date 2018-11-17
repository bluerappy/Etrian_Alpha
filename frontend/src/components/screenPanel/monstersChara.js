import React, {Component} from 'react';
import MonsterLifeBar from './monsterLifeBar'
import Death from '../../images/death.png'

const monsterStyle = {
    position: "absolute",
    left : "430px",
    top : "120px",
    textAlign: "center",
    color: "white"
  };

class MonstersChara extends Component {
    render() {
      // console.log("game over", this.props.gameOver)
      //   console.log("image", this.props.monsterStats.monsterImage)
        if (this.props.gameOver === true) {
          return (
            <div className="row">
             <div style={monsterStyle}>
                <img src={Death} alt="monster" width="250" height="250" />
                 <p>+ GAME OVER +</p>
            </div>
            </div>   
          );
        }
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