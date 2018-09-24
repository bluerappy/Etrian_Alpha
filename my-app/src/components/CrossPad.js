import React, {Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import TextPanel from '../components/TextPanel';
import ScreenPanel from '../components/ScreenPanel';

class CrossPad extends Component {
    constructor() {
        super();
        this.state = {
          click: true,
          message: "",
          swordCount: 0,
          lifePotionCount : 0,
          health: [1,1,1],
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
    if(this.state.potion > 0) {
        if(newHealth.length < 8){
            newHealth.push(1);
            this.setState({
                message: "ADV?", health: newHealth
              });
    }
    }
}

_clickRight() {
    let newPotion = this.state.potion+1
    this.setState({
        message: "Go Right?", potion: newPotion
      });
}
_clickWid() {
    this.setState({
        message: "Widthdraw?"
      });
}

    render() {
        return (
            <div>
                        <ScreenPanel health={this.state.health} lifePotionCount={this.state.lifePotionCount} swordCount={this.state.swordCount}/>
                        <TextPanel message={this.state.message}/>

                    <ButtonGroup size="sm">
                        <Button onClick={()=>this._clickLeft()}>degats</Button>
                        <Button onClick={()=>this._clickAdv()}>potion</Button>
                        <Button onClick={()=>this._clickRight()}>Right</Button>
                        <Button onClick={()=>this._clickWid()}>Wid</Button>
                    </ButtonGroup>
                       
            </div>
        );
    }
}

export default CrossPad;