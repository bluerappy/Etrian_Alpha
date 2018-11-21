import React, {Component} from 'react';
// import { Row, Col } from 'reactstrap';
import poisonIcon from '../../images/poison.png';

const iconStyle = {
        position: "absolute",
        left : "950px",
        bottom: "430px"
  };

class StatusIcon extends Component {
  render() {
    if (this.props.status === 'Poison') {
      return (
        <div style={iconStyle}>
        <img src={poisonIcon} alt="Poison" width="40" height="40" />
       </div>
      )
    }
    return (
      <div></div>
    )
  }
}

export default StatusIcon;