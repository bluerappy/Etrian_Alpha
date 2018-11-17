import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { addMonster } from '../../actions/monsters-action';
import monstersAdd from '../../components/forms/monsterAdd';

export default connect(null, (dispatch) => ({
  addMonster: bindActionCreators(addMonster, dispatch),
}))(monstersAdd);