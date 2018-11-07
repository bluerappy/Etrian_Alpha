import React, {Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import TextPanel from './textPanel/TextPanel';
import ScreenPanel from './screenPanel/ScreenPanel';
import Map from "./map"

class MainScreen extends Component {
    constructor() {
        super();
        this.state = {
          stage: 1,
          click: true,
          message: '',
          message2: '',
          swordCount: 0,
          lifePotionCount : 5,
          health: [1,1,1],
          steps : 0,
          stepsDone : 0,
          stepsForNextStage : 0,
          monsterStats : { 
            monsterAppearance: false,
            monsterName : "Slime",
            monsterHealth: 1,
            monsterAttack : 1,
            monsterImage : ""},
        };
        this.monsterBaseStats = this.state.monsterStats;
      }

componentDidMount() {
    this.props.getMonstersList();

    if (this.state.stepsForNextStage <=0) {
      this.setState({stepsForNextStage : this.state.stage + Math.floor(Math.random() * 10) + 1},
       () => {console.log("stepsfornext", this.state.stepsForNextStage)})
    }
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

//------------------------FIGHT FORMULA------------------------//
_attaque() {
  console.log(this.props.monstersList)
  if(this.state.monsterStats.monsterHealth>0) {
    let monsterStats = {...this.state.monsterStats};
        monsterStats.monsterHealth= monsterStats.monsterHealth -1;
        this.setState({
          message: "Vous lui infligez des dégats !", monsterStats
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

//------------------------WALK FORMULA------------------------//
_walk() {
    this.setState({message2 : ""})
    const actualStage = this.state.stage;
    const encounter = 1;
    const stepscount = Math.floor(Math.random() * Math.floor(4));
    const test= this.state.stepsDone;
   
    if (stepscount > 0) {
        this.setState({ steps : stepscount}, ()=> {
            this.setState({ message : 'Vous avez avancé de ' + this.state.steps + ' pas.' , stepsDone :  (test+stepscount)},
            ()=> {
              if (this.state.stepsDone >= this.state.stepsForNextStage) {
                console.log("STAGE DONE !!!!!!!!!!!!!!!!!!!!!!!!!")
                this.setState({stage : this.state.stage +1, stepsDone : 0, stepsForNextStage : this.state.stage + Math.floor(Math.random() * 10) + 1})
                console.log("for next", this.state.stepsForNextStage)
              }
              console.log("STEPSDONE", this.state.stepsDone)
            })
        })
    }
    else this.setState({ steps : stepscount}, ()=> {
        this.setState({ message : `Vous n'avancez guère.....`})
        console.log("NO STEPS")
    })

    //----------------------------WALK FORMULA { ENCOUNTER CASE }---------------------------// 
    if (encounter === 1 && actualStage === this.state.stage) {
      const randomPick = Math.floor(Math.random() * Math.floor(this.props.monstersList.data.length));
       this.setState( prevState => ({
        monsterStats: {
            ...prevState.monsterStats,
            monsterAppearance: true,
            monsterName : this.props.monstersList.data[randomPick].name,
            monsterHealth : this.props.monstersList.data[randomPick].healthPoints,
            monsterAttack : this.props.monstersList.data[randomPick].power,
            monsterImage : this.props.monstersList.data[randomPick].image
          }
       }) , this.setState({ message2 : 'Un monstre est apparu !'})
       )
    }
}

    render() {
      // console.log("test", this.props.monstersList)
      return (
        <div>
          <ScreenPanel health={this.state.health} lifePotionCount={this.state.lifePotionCount}
            swordCount={this.state.swordCount} monsterStats={this.state.monsterStats} stage={this.state.stage} />
          <TextPanel message={this.state.message} message2={this.state.message2}/>
          <ButtonGroup size="sm">
            {/* <Button onClick={()=>this._clickLeft()}>degats</Button>
                <Button onClick={()=>this._clickAdv()}>potion</Button>
                <Button onClick={()=>this._clickRight()}>give potion</Button> */}
                <Button color="danger" disabled={this.state.monsterStats.monsterAppearance=== false} onClick={()=>this._attaque()}>Attaque</Button>
                <Button color="primary" disabled={this.state.monsterStats.monsterAppearance=== true} onClick={()=>this._walk()}>Walk</Button>
          </ButtonGroup>
              {/* <Map/>          */}
        </div>
        );
      }
    }

export default MainScreen;