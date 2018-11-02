import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { addMonster } from '../../actions/monsters-action';
import monstersAddForm from '../../components/forms/monstersAddForm';

export default connect(null, (dispatch) => ({
  addMonster: bindActionCreators(addMonster, dispatch),
}))(monstersAddForm);