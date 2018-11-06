import React, {Component} from 'react';
// import { Row, Col } from 'reactstrap';
import heartImage from '../../images/heart.png';

const heartStyle = {
        position: "relative",
        left : "1020px",
        bottom: "230px"
  };

class HealthBar extends Component {
  render() {
    //console.log("health",this.props.health)
    const health = this.props.health;
    return (
      <div>
        {health.map((x, i) => {
          return (
            <div key={i} style={heartStyle} className="row">
              <div>
                <img src={heartImage} alt="heart" width="50" height="50" />
              </div>
            </div>
            );
          }
          )}
      </div>
      )}
    }

export default HealthBar;