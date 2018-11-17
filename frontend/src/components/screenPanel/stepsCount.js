import React, {Component} from 'react';
import { Progress } from 'reactstrap';

class StepsCount extends Component {
  constructor() {
    super();
    this.state = {
      stepsDone : null,
      stepsForNextStage: null
    };
  }

  componentDidMount(){
    this.setState({ stepsDone : this.props.stepsDone,
                    stepsForNextStage: this.props.stepsForNextStage })
  }

  stepsProgressBar = () => {
    let stepsForNextStage = this.props.stepsForNextStage;
    let stepsDone = this.props.stepsDone;
    const stepsDoneBarValue = Math.floor(( stepsDone / stepsForNextStage ) * 100);
    if (stepsDoneBarValue <= 20) {
      return (
        <Progress striped color="danger" value={stepsDoneBarValue}></Progress>
      )
    }
      else if (stepsDoneBarValue <= 50) {
      return (
        <Progress striped color="warning" value={stepsDoneBarValue}></Progress>
      )
    }  
    else if (stepsDoneBarValue <= 80) {
      return (
        <Progress striped value={stepsDoneBarValue}></Progress>
      )
    }
    else if (stepsDoneBarValue <= 100) {
      return (
        <Progress striped color="success" value={stepsDoneBarValue}></Progress>
      )
    }
  }

  render () {
    return (
      <div>
           {this.stepsProgressBar()}
      </div>
    )
  }
}

export default StepsCount;