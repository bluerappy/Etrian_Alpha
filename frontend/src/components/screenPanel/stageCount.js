import React, {Component} from 'react';
import StepsCountInStage from './stepsCountInStage';

const stageStyle = {
  position: "absolute",
  left : "495px",
  top : "10px",
  textAlign: "center",
  fontWeight : "bold",
  color : "black",
  borderRadius: "8px",
  border:" 4px solid #eaebea",
  width: "140px",
  height: "40px",
  backgroundColor : "rgba(255, 255, 255, 0.8)",
};

class StageCount extends Component {
    render() {
        return (
          <div style={stageStyle}>
            <p>STAGE {this.props.clearance.stage} </p>
            <StepsCountInStage clearance={this.props.clearance}/>
          </div>
        );
    }
}

export default StageCount;