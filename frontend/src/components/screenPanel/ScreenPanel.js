import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import SwordCount from './swordCount'
import LifePotionCount from './lifePotionCount';
import SupportChara from './SupportChara';
import MonstersChara from './monstersChara';
import HealthBar from './healthBar';
import StageCount from './stageCount';

const divStyle = {
    borderRadius: "8px",
    border: '4px solid grey',
    padding: "20px",
    width: "1080px",
    height: "500px",
    backgroundColor: "black"
  };

// const pStyle = {
//     fontSize: '15px',
//     textAlign: 'center'
//   };

class ScreenPanel extends Component {
_onClickSword() {
    console.log("Sword", this.props.swordCount)
}
_onClickLifePotion() {
    console.log("LifePotion", this.props.lifePotionCount)
}
    render() {
        // console.log("screenpanel",this.props.swordCount)
        return (
          <Row>
            <Col xs={"2"}>
              <div style={divStyle}>
              <StageCount stage={this.props.stage}/>
                <SupportChara swordCount={this.props.swordCount}/>
                <MonstersChara monsterStats={this.props.monsterStats}/>
                <HealthBar health={this.props.health}/>
                  <div onClick={()=>this._onClickSword()}> 
                    <SwordCount swordCount={this.props.swordCount}/>
                  </div>
                  <div onClick={()=>this._onClickLifePotion()}>
                    <LifePotionCount lifePotionCount={this.props.lifePotionCount}/>
                  </div>
              </div>
            </Col>
             
          </Row>  
        );
    }
}

export default ScreenPanel;