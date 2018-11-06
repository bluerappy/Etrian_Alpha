import React, {Component} from 'react';
import potion from '../../images/potion.png'

const potionStyle = {
    padding: "1px",
    borderRadius: "8px",
    border:" 4px solid #eaebea",
    width: "50px",
    height: "50px",
    backgroundColor : "rgba(255, 255, 255, 0.8)",
    position : "absolute",
    top : "105px",
    display : "flex"
  };

const textStyle = {
    color: "white",
    fontWeight: "bold",
    position : "absolute",
    left : "75px",
}

class LifePotionCount extends Component {
    render() {
        // console.log("lifePotionCount",this.props.lifePotionCount)
        return (
          <div style={potionStyle}>
            <div >
              <img src={potion} alt="monster" width="50" height="50" />
            </div>
            <div style={textStyle}>
              <p>x {this.props.lifePotionCount}</p>
            </div>
        </div>
    );
  }
}

export default LifePotionCount;