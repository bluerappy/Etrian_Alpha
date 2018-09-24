import React, {Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import TextPanel from '../components/TextPanel';
import ScreenPanel from '../components/ScreenPanel';
import Map from "../components/map"

class CrossPad extends Component {
    constructor() {
        super();
        this.state = {
          click: true,
          message: "",
          swordCount: 0,
          lifePotionCount : 5,
          health: [1,1,1],
          monsterStats : {
            monsterAppearance: true,
            monsterHealth: 8,
            attack : 1,
          }
        };
      }

_clickLeft() {
    let newSwordCount = this.state.swordCount+1;
    let healthDamage = this.state.health;
    healthDamage.pop();
    this.setState({
        message: "Now, attack !", swordCount: newSwordCount, health: healthDamage
      });
}
_clickAdv() {
    let newHealth = this.state.health;
    let newLifePotionCount = this.state.lifePotionCount-1
    if(this.state.lifePotionCount > 0 && newHealth.length < 8) {
            newHealth.push(1);
            this.setState({
                message: "life!", health: newHealth, lifePotionCount: newLifePotionCount
              });
    } 
}

_clickRight() {
    let newPotion = this.state.potion+1
    this.setState({
        message: "Go Right?", potion: newPotion
      });
}

//algo combat+défaite mobs
_clickWid() {
    if(this.state.monsterStats.monsterHealth>0) {
        let monsterStats = {...this.state.monsterStats};
        monsterStats.monsterHealth= monsterStats.monsterHealth -1;
        this.setState({
            message: "ATT?", monsterStats
          });
          if(this.state.monsterStats.monsterHealth<=1) {
            let monsterStats = {...this.state.monsterStats};
            monsterStats.monsterAppearance= false;
            this.setState({
                message: "KO", monsterStats
              });
            }
        }
}

    render() {
        return (
            <div>
                        <ScreenPanel health={this.state.health} lifePotionCount={this.state.lifePotionCount} swordCount={this.state.swordCount} monsterStats={this.state.monsterStats}/>
                        <TextPanel message={this.state.message}/>

                    <ButtonGroup size="sm">
                        <Button onClick={()=>this._clickLeft()}>degats</Button>
                        <Button onClick={()=>this._clickAdv()}>potion</Button>
                        <Button onClick={()=>this._clickRight()}>give potion</Button>
                        <Button onClick={()=>this._clickWid()}>att</Button>
                    </ButtonGroup>
                    <Map/>
                       
            </div>
        );
    }
}

export default CrossPad;