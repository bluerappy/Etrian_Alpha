import React, {Component} from 'react';
import slimeImage from '../images/slime.png';
import cristalSlimeImage from '../images/cristalSlime.png';

const SupportStyle = {
    position: "relative",
    top : "425px",
    left : "10px"
  };

class SupportChara extends Component {
    render() {
        console.log("swordcount mob",this.props.swordCount)
        if(this.props.swordCount % 2 === 0) {
            return (
                <div  className="row">
                 <div style={SupportStyle}>
                  <img src={cristalSlimeImage} alt="Support Character" width="250" height="250" />
                 </div>
                </div>   
            );
        }
        else {
            return (
                <div style={SupportStyle} className="row">
                 <div>
                  <img src={slimeImage} alt="Support Character" width="250" height="250" />
                 </div>
                </div>    
            );
        }
    }
}

export default SupportChara;