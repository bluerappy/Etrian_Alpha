import React, {Component} from 'react';
import sword from '../../images/sword.png';

const swordStyle = {
    padding: "1px",
    borderRadius: "8px",
    border:" 4px solid #eaebea",
    width: "60px",
    height: "60px",
    backgroundColor : "rgba(255, 255, 255, 0.8)",
    position : "absolute",
    top : "25px",
    display: "flex",
  };

  const swordStyleGOLD = {
    padding: "1px",
    borderRadius: "8px",
    border:" 4px solid #FFD700",
    width: "60px",
    height: "60px",
    backgroundColor : "#FFFACD",
    position : "absolute",
    top : "25px",
    display: "flex",
  };

const textStyle = {
    color: "white",
    fontWeight: "bold",
    position : "absolute",
    left : "75px",
}

class SwordCount extends Component {
  render() {
    return (
      <div style={this.props.useSpecial === false ? swordStyle : swordStyleGOLD}>
        <div>
          <img src={sword} alt="monster" width="50" height="50" />
        </div>
        <div style={textStyle}>
          <p>x {this.props.swordCount}</p>
        </div>
      </div>
      );
    }
  }

export default SwordCount;