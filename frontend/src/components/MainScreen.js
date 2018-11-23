import React, {Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import TextPanel from './textPanel/TextPanel';
import ScreenPanel from './screenPanel/ScreenPanel';
import InfosPanel from './infosPanel/infosPanel';

class MainScreen extends Component {
    constructor() {
        super();
        this.state = {
          heroesData : {
            level: 0,
            experiencePoints: 0,
            experienceForLevelUp: 0,
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
            type : "Normal",
            monsterAppearance: false,
            bossType : false,
            level : 1,
            monsterName : 'Slime',
            monsterHealth: 1,
            monsterAttack : 0,
            itemsDrop: [],
            experiencePots: 1,
            monsterImage : ""},
          others : {
            monsterAttackDice : 0,
            monsterDamageDice : 0,
          }
        };
      }

//--------- SETUP NECESSARIES STEPS ----------//
componentDidMount() {
  const { stepsForNextStage, stage} = this.state.clearance;

  this.setState(prevState => ({
    heroesData: {
        ...prevState.heroesData,
        level: this.props.heroesList.data[0].level,
        name: this.props.heroesList.data[0].name,
        experiencePoints: this.props.heroesList.data[0].experiencePoints,
        experienceForLevelUp: this.props.heroesList.data[0].experienceForLevelUp,
        status: this.props.heroesList.data[0].status,
        health: this.props.heroesList.data[0].healthPoints,
        power: this.props.heroesList.data[0].power,
    }
}));

    if (stepsForNextStage <=0) {
      this.setState(prevState => ({
        clearance: {
            ...prevState.clearance,
            stepsForNextStage : (stage + Math.floor(Math.random() * 15) + 1)
        }
    }));
    }
} 

//------------- GAME OVER && CLEARANCE && XP CONDITIONS ---------------//
static getDerivedStateFromProps(props, state) {
  if (state.heroesData.health.length === 0) {
    return {
      gameInfos: {
             gameOver : true,  
             message: 'GAME OVER',
             message2: state.clearance.stage > 1 ? `Votre cadavre jonche désormais le ` + state.clearance.stage +`ème étage....`: `Votre cadavre jonche désormais le ` + state.clearance.stage + `er étage...`},
      heroesData : { 
        ...state.heroesData,
            status : "Dead"}
    }
  };

  if (state.clearance.stepsDone >= state.clearance.stepsForNextStage) {
    return { clearance: { stage : (state.clearance.stage+1),  
                          stepsDone : 0,
                          stepsForNextStage : (state.clearance.stage + Math.floor(Math.random() * 15) + 1)}
                        }
                      };

  if ( state.monsterStats.monsterHealth <= 0 && state.monsterStats.monsterAppearance === true ) {
    const heroesActualExperience = state.heroesData.experiencePoints;
    const monsterExpDrop = state.monsterStats.experiencePots;
    return {
      monsterStats : {
        ...state.monsterStats,
        monsterAppearance : false,
        type : "",
        bossType : false,
        level : "",
        monsterName : '',
        monsterHealth: "",
        monsterAttack : "",
        itemsDrop: [],
        experiencePots: "",
        monsterImage : "",
      },
      gameInfos: {
        ...state.gameInfos,
        message : state.others.monsterAttackDice ===1 && state.others.monsterDamageDice >= 1 
        ? "Victoire..." : "Victoire !" ,
        message2 : state.others.monsterAttackDice ===1 && state.others.monsterDamageDice >= 1 
        ? `Le monstre est vaincu mais vous a infligé ` + state.others.monsterDamageDice + ` dégat(s) en succombant...` : "Le monstre est vaincu !",
      },
      heroesData : {
        ...state.heroesData,
        experiencePoints : (heroesActualExperience+monsterExpDrop),
      }
    }
  };
  // if ( state.heroesData.experiencePoints >= state.heroesData.experienceForLevelUp ) {
  //   return {
  //     heroesData : {
  //       ...state.heroesData,
  //       level : state.heroesData.level+1,
  //     }
  //   }
  // };
  return state;
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
  const { health } = this.state.heroesData;
  const { monsterHealth, monsterAttack} = this.state.monsterStats;
  const monsterAttackChance =1;
  const monsterDamage = Math.floor(Math.random() * Math.floor(monsterAttack+1));
    this.setState(prevState => ({
      gameInfos: {
          ...prevState.gameInfos,
          message2: "",
      },
      others: {
        ...prevState.others,
        monsterDamageDice : monsterDamage,
        monsterAttackDice : monsterAttackChance,
      }
  }));

   if (monsterAttackChance === 1 && monsterDamage > 0) {
     health.splice(0, monsterDamage);
        this.setState(prevState => ({
          gameInfos: {
            ...prevState.gameInfos,
            message2 : monsterDamage > 0 ? 'Le monstre vous inflige ' + monsterDamage + ' dégats !':
            'Le monstre vous inflige ' + monsterDamage + ' dégat !'
      }
  }));
  }
  
  if (monsterHealth > 0 && health.length > 0) {
    const heroesPower = this.state.heroesData.power;
    const heroesStrike = (Math.floor(Math.random() * Math.floor(2))) + heroesPower;
    this.setState(prevState => ({
      monsterStats: {
          ...prevState.monsterStats,
          monsterHealth: monsterHealth-heroesStrike,
      },
      gameInfos: {
          ...prevState.gameInfos,
          message : `Vous lui infligez ` + heroesStrike + ` dégat(s) !`
      }
  }), () => { if (this.state.heroesData.experiencePoints >= this.state.heroesData.experienceForLevelUp) { //CALL BACK FOR INSTANT LEVEL UP
    const OldExperienceNeeded = this.state.heroesData.experienceForLevelUp;
    const OldPower = this.state.heroesData.power;
    const experienceNeedsUp = (Math.floor(Math.random() * Math.floor(10)))+OldExperienceNeeded+1;
    const newPower = (Math.floor(Math.random() * Math.floor(3)))+OldPower;
    this.setState(prevState => ({
      heroesData: {
          ...prevState.heroesData,
          level : this.state.heroesData.level+1,
          experiencePoints : 0,
          experienceForLevelUp : experienceNeedsUp,
          power : newPower,
      }
  }))
  }})
 };
}

//------------------------WALK ALGORYTHM------------------------//
_walk() {
  const { health, status } = this.state.heroesData;
  const { stepsDone, stage } = this.state.clearance;
  const actualStage = stage;
  const encounter = Math.floor(Math.random() * Math.floor(4));
  const StepsCountInStage = Math.floor(Math.random() * Math.floor(4));
  const test = stepsDone;

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
    }), () => {  //CALL BACK
      this.setState(prevState => ({
        gameInfos: {
            ...prevState.gameInfos,
            message2 : encounter === 1 ? "Vous êtes empoisonné et perdez 1PV! Un monstre surgit !" : "Vous êtes empoisonné et perdez 1PV!"
          }
        }));
      }
    );
  }
    //-------------------------------------------------//
 
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
            monsterImage : this.props.monstersList.data[randomPick].image,
            experiencePots : this.props.monstersList.data[randomPick].experiencePots,
            itemsDrop : this.props.monstersList.data[randomPick].itemsDrop
          }
       }) , this.setState(prevState => ({ 
                            gameInfos: {
                            ...prevState.gameInfos,
                            message2: 'Un monstre est apparu !',
                          },
    })))  
    }
  }

    render() {
      const { monsterAppearance } = this.state.monsterStats;
      const { gameOver } = this.state.gameInfos;
      return (
        <div>
          <Row>
            <Col>
             <ScreenPanel clickPotion={()=>this._drinkPotion()} monsterStats={this.state.monsterStats} heroesData={this.state.heroesData} items={this.state.items} clearance={this.state.clearance} gameInfos={this.state.gameInfos}/>
             <TextPanel gameInfos={this.state.gameInfos}/>
             <ButtonGroup size="sm">
              <div><Button onClick={()=>this._changeStatus()}>CHANGE STATUS TEST</Button></div>
              <div><Button color="danger" disabled={monsterAppearance=== false || gameOver === true} onClick={()=>this._attaque()}>Attaque</Button></div>
              <div><Button color="primary" disabled={monsterAppearance=== true || gameOver === true} onClick={()=>this._walk()}>Walk</Button></div>
              <div><Button color="success" onClick={()=>this._drinkPotion()}>Potion</Button></div> 
            </ButtonGroup>
          </Col> 
          <Col>
            <InfosPanel heroesData={this.state.heroesData}/>
          </Col>    
        </Row>
        </div>
        );
      }
    }

export default MainScreen;