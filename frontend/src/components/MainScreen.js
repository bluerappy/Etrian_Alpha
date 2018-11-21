import React, {Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import TextPanel from './textPanel/TextPanel';
import ScreenPanel from './screenPanel/ScreenPanel';
// import Map from "./map"

class MainScreen extends Component {
    constructor() {
        super();
        this.state = {
          heroesData : {
            level: 1,
            experiencePoints: 0,
            name: "Hero",
            status: "Healthy",
            health: [1,1,1,1,1,1,1,1],
            power: 2
          },
          items : {
            swordCount: 2,
            weaponDurability: 5,
            lifePotionCount: 10,
            antidotePotionCount: 0,
          },
          clearance : {
            dungeonGlobalLevel: 1,
            stage : 0,
            steps : null,
            stepsDone : null,
            stepsForNextStage : null,
          },
          gameInfos: {
            gameOver: false,
            message: "",
            message2: "",
          },
          monsterStats : { 
            monsterAppearance: false,
            monsterName : 'Slime',
            monsterHealth: 1,
            monsterAttack : 0,
            monsterImage : ""},
        };
      }

//--------- SETUP NECESSARIES STEPS ----------//
componentDidMount() {
  const { stepsForNextStage, stage} = this.state.clearance;
    this.props.getMonstersList();
    this.props.getHeroesById();
    if (stepsForNextStage <=0) {
      this.setState(prevState => ({
        clearance: {
            ...prevState.clearance,
            stepsForNextStage : (stage + Math.floor(Math.random() * 15) + 1)
        }
    }));
    }
} 

//------------- GAME OVER && CLEARANCE CONDITIONS ---------------//
static getDerivedStateFromProps(nextState, prevState) {
  if (prevState.heroesData.health.length === 0) {
    return { gameInfos: { gameOver : true,  
             message: 'GAME OVER',
             message2: `Votre cadavre jonche désormais le ` + prevState.clearance.stage +`ème étage....`}
    }
  };
  if (prevState.clearance.stepsDone >= prevState.clearance.stepsForNextStage) {
    return { clearance: { stage : (prevState.clearance.stage+1),  
                          stepsDone : 0,
                          stepsForNextStage : (prevState.clearance.stage + Math.floor(Math.random() * 15) + 1)}
                        }
                      }
      return null;
}
//--------------------------------------------------------------//

_changeStatus() {
  if (this.state.heroesData.status === "Poison") {
    this.setState(prevState => ({
      heroesData: {
          ...prevState.heroesData,
          status: "Healthy",
      }
  }));
  }
  if (this.state.heroesData.status === "Healthy") {
    this.setState(prevState => ({
      heroesData: {
          ...prevState.heroesData,
          status: "Poison",
      }
  }));
  }
}

//----------------- LIFE POTION ALGORYTHM ---------------------//
_drinkPotion() {
  const { gameOver } = this.state.gameInfos;
  const { lifePotionCount } = this.state.items;
  const { health } = this.state.heroesData;

  if (gameOver === true) {
   return null
  }
  if (lifePotionCount === 0) {
     this.setState(prevState => ({
      gameInfos: {
          ...prevState.gameInfos,
          message: "Vous n'avez plus de potions",
      }
  }));
  }
  else if (health.length === 9) {
      this.setState(prevState => ({
      gameInfos: {
          ...prevState.gameInfos,
          message: "Votre vie est déjà à son maximum",
          message2: "",
      }
  }));
  }
  else if (health.length < 9 && lifePotionCount > 0) {
    let actualPotionCount = lifePotionCount;
    let actualHealth = health;
    const randomIndex = Math.floor(Math.random() * Math.floor(actualHealth.length+1));
    actualHealth.splice(randomIndex ,0,1)
    this.setState(prevState => ({
      gameInfos: {
          ...prevState.gameInfos,
          message: "Vous utilisez une potion de soin et recouvrez 1PV!",
          message2: ""
      },
      items : {
        ...prevState.items,
        lifePotionCount : (actualPotionCount-1),
      }
  }));
  }
}

//------------------------FIGHT ALGORYTHM------------------------//
_attaque = () => {
  const { gameOver } = this.state.gameInfos;
  const { health } = this.state.heroesData;
  const { monsterHealth, monsterAttack} = this.state.monsterStats;

  if (gameOver === false) {
    const monsterAttackChance = Math.floor(Math.random() * Math.floor(4));
    const monsterDamage = Math.floor(Math.random() * Math.floor(monsterAttack+1));

    this.setState(prevState => ({
      gameInfos: {
          ...prevState.gameInfos,
          message2: "",
      }
  }));

   if (monsterAttackChance === 1 && monsterDamage > 0 && gameOver === false) {
     health.splice(0, monsterDamage);
        this.setState(prevState => ({
          gameInfos: {
            ...prevState.gameInfos,
            message2 : monsterDamage > 0 ? 'Le monstre vous inflige ' + monsterDamage + ' dégats !':
            'Le monstre vous inflige ' + monsterDamage + ' dégat !'
      }
  }));
  }
  
  if(monsterHealth>0 && health.length>0) {
    this.setState(prevState => ({
      monsterStats: {
          ...prevState.monsterStats,
          monsterHealth: monsterHealth-1,
      },
      gameInfos: {
          ...prevState.gameInfos,
          message : "Vous lui infligez des dégats !"
      }
  }));

  if (monsterHealth<=1) {
    this.setState(prevState => ({
      monsterStats: {
          ...prevState.monsterStats,
          monsterAppearance: false,
      },
      gameInfos: {
          ...prevState.gameInfos,
          message : "Victoire !",
          message2 : "Le monstre est vaincu !"
      }
  }));
  }};  

  if (monsterHealth <=1 && monsterAttackChance === 1 && monsterDamage > 0) {
    this.setState(prevState => ({
      monsterStats: {
          ...prevState.monsterStats,
          monsterAppearance: false,
      },
      gameInfos: {
          ...prevState.gameInfos,
          message : "Victoire....",
          message2 : monsterDamage > 1 ? `Le monstre est vaincu mais vous inflige ` + monsterDamage + ` dégats en succombant...` :
          `Le monstre est vaincu mais vous inflige ` + monsterDamage + ` dégat en succombant...` 
      }
  }));
  };    
  }
}

//------------------------WALK ALGORYTHM------------------------//
_walk() {
  const { health, status } = this.state.heroesData;
  const { gameOver } = this.state.gameInfos;
  const { stepsDone, stage } = this.state.clearance;

  if (health.length>0 && gameOver === false) {
    //-------------POISON CASE--------------------------//
    const poisonDamage = Math.floor(Math.random() * Math.floor(2));
    if (status === "Poison" && poisonDamage === 1) {
      const actualHealth = health;
      const randomIndex = Math.floor(Math.random() * Math.floor(actualHealth.length+1));
      actualHealth.splice(randomIndex, 1);
      this.setState(prevState => ({
        heroesData: {
            ...prevState.heroesData,
            health: actualHealth,
        }
    }));
  }
    //-------------------------------------------------//
 
    const actualStage = stage;
    const encounter = Math.floor(Math.random() * Math.floor(4));
    const StepsCountInStage = Math.floor(Math.random() * Math.floor(4));
    const test = stepsDone;

    if (StepsCountInStage > 0 ) {
      this.setState(prevState => ({
        clearance: {
            ...prevState.clearance,
            steps: StepsCountInStage,
            stepsDone :  (test+StepsCountInStage),
        },
        gameInfos : {
          ...prevState.gameInfos,
          message :  'Vous avez avancé de ' + StepsCountInStage + ' pas.' ,
          message2 : '',
        }
    }));
    }
   //---------------NO STEPS---------------------//
    else if (StepsCountInStage <= 0) {this.setState(prevState => ({
      gameInfos: {
          ...prevState.gameInfos,
          message: "Vous êtes épuisé et n'avancez guère....",
          message2: "",
      }
  }));
};
    //---------------WALK ALGORYTHM { ENCOUNTER CASE }------------------// 
    if (encounter ===  1 && actualStage === stage) {
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
       }) , this.setState(prevState => ({ 
                            gameInfos: {
                            ...prevState.gameInfos,
                            message: 'Un monstre est apparu !',
        }
    })))  
    }
  }
}
    render() {
      const { monsterAppearance } = this.state.monsterStats;
      return (
        <div>
          <ScreenPanel monsterStats={this.state.monsterStats} heroesData={this.state.heroesData} items={this.state.items} clearance={this.state.clearance} gameInfos={this.state.gameInfos}/>
          <TextPanel gameInfos={this.state.gameInfos}/>
          <ButtonGroup size="sm">
            <div><Button onClick={()=>this._changeStatus()}>CHANGE STATUS TEST</Button></div>
            <div><Button color="danger" disabled={monsterAppearance=== false} onClick={()=>this._attaque()}>Attaque</Button></div>
            <div><Button color="primary" disabled={monsterAppearance=== true} onClick={()=>this._walk()}>Walk</Button></div>
            <div><Button color="success" onClick={()=>this._drinkPotion()}>Potion</Button></div> 
          </ButtonGroup>
              {/* <Map/>          */}
        </div>
        );
      }
    }

export default MainScreen;