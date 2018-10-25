import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getMonstersList } from '../actions/getMonstersList-action';
import MainScreen from '../components/MainScreen';

export default connect(state => ({
  monstersList: state.monstersList
}), (dispatch) => ({
  getMonstersList: bindActionCreators(getMonstersList, dispatch),
}))(MainScreen);