import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import SwordCount from './swordCount'
import LifePotionCount from './lifePotionCount';
import SupportChara from './SupportChara';
import MonstersChara from './monstersChara';
import HealthBar from './healthBar';
import StageCount from './stageCount';
import StatusIcon from './statusIcon';

const divStyle = {
    borderRadius: "8px",
    border: '4px solid grey',
    padding: "20px",
    width: "1080px",
    height: "500px",
    backgroundColor: "black"
  };

class ScreenPanel extends Component {
_onClickSword() {
    this.props.useSpecialWeapon();
}
_onClickLifePotion() {
    this.props.clickPotion();
}
    render() {
        return (
          <Row>
            <Col xs={"2"}>
              <div style={divStyle}>
              <StageCount clearance={this.props.clearance}/>
                <SupportChara swordCount={this.props.swordCount}/>
                <MonstersChara attack={this.props.attack} monsterStats={this.props.monsterStats} gameInfos={this.props.gameInfos}/>
                <div>
                <HealthBar heroesData={this.props.heroesData}/>
                <StatusIcon status={this.props.heroesData.status}/>
                </div>
              
                  <div onClick={()=>this._onClickSword()}> 
                    <SwordCount useSpecial={this.props.useSpecial} swordCount={this.props.items.swordCount}/>
                  </div>
                  <div onClick={()=>this._onClickLifePotion()}>
                    <LifePotionCount lifePotionCount={this.props.items.lifePotionCount}/>
                  </div>
              </div>
            </Col>
             
          </Row>  
        );
    }
}

export default ScreenPanel;