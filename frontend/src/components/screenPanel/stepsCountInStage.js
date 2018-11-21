import React, {Component} from 'react';
import { Progress } from 'reactstrap';

const progressBarStyle = {
  height: '5px',
};
const pStyle = {
  color : 'white'
}

class StepsCountInStage extends Component {

  stepsProgressBar = () => {
    const { stepsDone, stepsForNextStage } = this.props.clearance;
    const stepsDoneBarValue = Math.floor(( stepsDone / stepsForNextStage ) * 100);
    if (stepsDoneBarValue <= 20) {
      return (
        <Progress style={progressBarStyle} striped color="danger" value={stepsDoneBarValue}></Progress>
      )
    }
      else if (stepsDoneBarValue <= 50) {
      return (
        <Progress style={progressBarStyle} striped color="warning" value={stepsDoneBarValue}></Progress>
      )
    }  
    else if (stepsDoneBarValue <= 80) {
      return (
        <Progress style={progressBarStyle} striped value={stepsDoneBarValue}></Progress>
      )
    }
    else if (stepsDoneBarValue <= 100) {
      return (
        <Progress style={progressBarStyle}striped color="success" value={stepsDoneBarValue}></Progress>
      )
    }
    else return (
        <Progress style={progressBarStyle}striped></Progress>
      )
  }

  render () {
    // console.log(this.state)
    return (
      <div>
           {this.stepsProgressBar()}
           <p style={pStyle}>{this.props.clearance.stepsDone}/{this.props.clearance.stepsForNextStage}</p>
      </div>
    )
  }
}

export default StepsCountInStage;