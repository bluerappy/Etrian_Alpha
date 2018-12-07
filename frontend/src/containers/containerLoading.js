import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getMonstersList } from '../actions/monsters-action';
import { getHeroesById } from '../actions/heroes-action';
import LoadingPage from '../components/loadingPage';

export default connect(state => ({
  monstersList: state.monstersList,
  heroesList: state.heroesList
}), (dispatch) => ({
  getMonstersList: bindActionCreators(getMonstersList, dispatch),
  getHeroesById: bindActionCreators(getHeroesById, dispatch)
}))(LoadingPage);