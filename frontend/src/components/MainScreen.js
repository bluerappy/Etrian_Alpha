import React, {Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import TextPanel from './textPanel/TextPanel';
import ScreenPanel from './screenPanel/ScreenPanel';
// import Map from "./map"

class MainScreen extends Component {
    constructor() {
        super();
        this.state = {
          stage: 1,
          gameOver: false,
          click: true,
          message: '',
          message2: '',
          swordCount: 0,
          lifePotionCount : 5,
          health: [1,1,1,1,1,1,1,1],
          status: "Healthy",
          steps : 0,
          stepsDone : 0,
          stepsForNextStage : 0,
          monsterStats : { 
            monsterAppearance: false,
            monsterName : "",
            monsterHealth: "",
            monsterAttack : "",
            monsterImage : ""},
        };
      }

//--------- SETUP NECESSARIES STEPS ----------//
componentDidMount() {
    this.props.getMonstersList();
    if (this.state.stepsForNextStage <=0) {
      this.setState({stepsForNextStage : this.state.stage + Math.floor(Math.random() * 15) + 1})
    }
} 

//------------- GAME OVER CONDITION ---------------//
static getDerivedStateFromProps(nextState, prevState) {
  if (prevState.health.length === 0) {
    return { gameOver : true,  
             message: 'Vous avez succombé.....',
             message2: "GAME OVER" }
  }
  return null;
}

_changeStatus() {
  if (this.state.status === "Poison") {
    this.setState({ status : "Healthy"});
  }
  if (this.state.status === "Healthy") {
    this.setState({ status : "Poison"});
  }
    
}
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

_drinkPotion() {
  if (this.state.health.length === 9) {
    this.setState({ message: "Votre vie est déjà à son maximum", message2: "" });
  }
  else if (this.state.health.length < 9) {
    let actualPotionCount = this.state.lifePotionCount;
    let actualHealth = this.state.health;
    const randomIndex = Math.floor(Math.random() * Math.floor(actualHealth.length+1));
    console.log("random",randomIndex)
    actualHealth.splice(randomIndex ,0,1)
    this.setState({
        message: "Vous utilisez une potion de soin !", message2: "", health: actualHealth
      });
      console.log(actualHealth)
  }
}

//------------------------FIGHT FORMULA------------------------//
_attaque = () => {
  const actualHealth = this.state.health;
  const monsterAttack = Math.floor(Math.random() * Math.floor(3));
  const monsterDamage = Math.floor(Math.random() * Math.floor(this.state.monsterStats.monsterAttack+1));
   if (monsterAttack === 1 && monsterDamage > 0 && this.state.gameOver === false) {
    actualHealth.splice(0, monsterDamage)
    this.setState({health: actualHealth, message2: 'Le monstre vous inflige ' + monsterDamage + ' dégat(s) !'});
  }
  
  if(this.state.monsterStats.monsterHealth>0 && actualHealth.length>0) {
    let monsterStats = {...this.state.monsterStats};
        monsterStats.monsterHealth = monsterStats.monsterHealth -1;
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
                message2 : "Le monstre est détruit !"
              });
            }
          }
        }

//------------------------WALK FORMULA------------------------//
_walk() {
  const poisonDamage = Math.floor(Math.random() * Math.floor(2));
  if (this.state.health.length>0) {
    //-------------POISON CASE--------------------------//
    if (this.state.status === "Poison" && poisonDamage === 1) {
      const actualHealth = this.state.health;
      const randomIndex = Math.floor(Math.random() * Math.floor(actualHealth.length+1));
      actualHealth.splice(randomIndex, 1);
      this.setState({health : actualHealth});

    }

    this.setState({message2 : ""})
    const actualStage = this.state.stage;
    const encounter = Math.floor(Math.random() * Math.floor(4));;
    const stepscount = Math.floor(Math.random() * Math.floor(4));
    const test= this.state.stepsDone;
   
    if (stepscount > 0) {
        this.setState({ steps : stepscount}, ()=> {
            this.setState({ message : 'Vous avez avancé de ' + this.state.steps + ' pas.' , stepsDone :  (test+stepscount)},
            ()=> {
              if (this.state.stepsDone >= this.state.stepsForNextStage) {
                this.setState({ stage : this.state.stage +1, 
                                stepsDone : 0, 
                                stepsForNextStage : this.state.stage + Math.floor(Math.random() * 10) + 1})
              }
            })
        })
    }
    else this.setState({ steps : stepscount}, ()=> {
        this.setState({ message : `Vous n'avancez guère.....`})
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
}

    render() {
      // console.log("test", this.props.monstersList)
      return (
        <div>
          <ScreenPanel status={this.state.status} health={this.state.health} lifePotionCount={this.state.lifePotionCount}
            swordCount={this.state.swordCount} monsterStats={this.state.monsterStats}
             stepsDone={this.state.stepsDone} stepsForNextStage={this.state.stepsForNextStage} stage={this.state.stage} gameOver={this.state.gameOver}/>
          <TextPanel message={this.state.message} message2={this.state.message2}/>
          <ButtonGroup size="sm">
                {/* <Button onClick={()=>this._clickLeft()}>degats</Button> */}
                <Button onClick={()=>this._changeStatus()}>CHANGE STATUS TEST</Button>
                <Button onClick={()=>this._drinkPotion()}>Potion</Button>
                <Button color="danger" disabled={this.state.monsterStats.monsterAppearance=== false} onClick={()=>this._attaque()}>Attaque</Button>
                <Button color="primary" disabled={this.state.monsterStats.monsterAppearance=== true} onClick={()=>this._walk()}>Walk</Button>
          </ButtonGroup>
              {/* <Map/>          */}
        </div>
        );
      }
    }

export default MainScreen;