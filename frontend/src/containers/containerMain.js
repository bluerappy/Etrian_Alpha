import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getMonstersList, addMonster } from '../actions/monsters-action';
import MainScreen from '../components/MainScreen';

export default connect(state => ({
  monstersList: state.monstersList
}), (dispatch) => ({
  getMonstersList: bindActionCreators(getMonstersList, dispatch),
  addMonster: bindActionCreators(addMonster, dispatch),
}))(MainScreen);