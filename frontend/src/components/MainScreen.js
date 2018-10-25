import React, {Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import TextPanel from './TextPanel';
import ScreenPanel from './ScreenPanel';
import Map from "./map"

class MainScreen extends Component {
    constructor() {
        super();
        this.state = {
            level: 1,
          click: true,
          message: '',
          message2: '',
          swordCount: 0,
          lifePotionCount : 5,
          health: [1,1,1],
          steps : '',
          monsterStats : { 
            monsterAppearance: false,
            monsterHealth: 4,
            attack : 1},
        };
        this.monsterBaseStats = this.state.monsterStats;
      }

componentDidMount() {
    this.props.getMonstersList();
}

// _clickLeft() {
//     let newSwordCount = this.state.swordCount+1;
//     let healthDamage = this.state.health;
//     healthDamage.pop();
//     this.setState({
//         message: "Now, attack !", swordCount: newSwordCount, health: healthDamage
//       });
// }
// _clickAdv() {
//     let newHealth = this.state.health;
//     let newLifePotionCount = this.state.lifePotionCount-1
//     if(this.state.lifePotionCount > 0 && newHealth.length < 8) {
//             newHealth.push(1);
//             this.setState({
//                 message: "life!", health: newHealth, lifePotionCount: newLifePotionCount
//               });
//     } 
// }

// _clickRight() {
//     let newPotion = this.state.potion+1
//     this.setState({
//         message: "Go Right?", potion: newPotion
//       });
// }

//algo combat+défaite mobs
_attaque() {
    if(this.state.monsterStats.monsterHealth>0) {
        let monsterStats = {...this.state.monsterStats};
        monsterStats.monsterHealth= monsterStats.monsterHealth -1;
        this.setState({
            message: "Vous lui infligé des dégats !", monsterStats
          });
          if(this.state.monsterStats.monsterHealth<=1) {
            let monsterStats = {...this.state.monsterStats};
            monsterStats.monsterAppearance= false;
            this.setState({
                message: "Victoire", monsterStats
              });
              this.setState({
                monsterStats: this.monsterBaseStats,
                message2 : "Le monstre est détruit !"
              });
            }
        }
}

_walk() {
    this.setState({message2 : ""})
    const encounter = Math.floor(Math.random() * Math.floor(4));
    const stepscount = Math.floor(Math.random() * Math.floor(4));
    this.setState({ steps : stepscount}, ()=> {
        this.setState({ message : 'Vous avez avancé de ' + this.state.steps + ' pas.'})
    })
    if (encounter === 1) {
       this.setState( prevState => ({
        monsterStats: {
            ...prevState.monsterStats,
            monsterAppearance: true}
       }) , this.setState({ message2 : 'Un monstre est apparu !'})
       )
    }
}


    render() {
        console.log("test", this.props.monstersList)
        return (
            <div>
                        <ScreenPanel health={this.state.health} lifePotionCount={this.state.lifePotionCount}
                         swordCount={this.state.swordCount} monsterStats={this.state.monsterStats}/>
                        <TextPanel message={this.state.message} message2={this.state.message2}/>

                    <ButtonGroup size="sm">
                        {/* <Button onClick={()=>this._clickLeft()}>degats</Button>
                        <Button onClick={()=>this._clickAdv()}>potion</Button>
                        <Button onClick={()=>this._clickRight()}>give potion</Button> */}
                        <Button disabled={this.state.monsterStats.monsterAppearance=== false} onClick={()=>this._attaque()}>Attaque</Button>
                        <Button disabled={this.state.monsterStats.monsterAppearance=== true} onClick={()=>this._walk()}>Walk</Button>
                    </ButtonGroup>
                    <Map/>
                       
            </div>
        );
    }
}

export default MainScreen;