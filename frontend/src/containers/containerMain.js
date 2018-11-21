import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getMonstersList, addMonster } from '../actions/monsters-action';
import { getHeroesById } from '../actions/heroes-action';
import MainScreen from '../components/MainScreen';

export default connect(state => ({
  monstersList: state.monstersList,
  heroesList: state.heroesList
}), (dispatch) => ({
  getMonstersList: bindActionCreators(getMonstersList, dispatch),
  addMonster: bindActionCreators(addMonster, dispatch),
  getHeroesById: bindActionCreators(getHeroesById, dispatch)
}))(MainScreen);