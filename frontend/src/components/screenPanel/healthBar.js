import React, {Component} from 'react';
// import { Row, Col } from 'reactstrap';
import heartImage from '../../images/heart.png';

const heartStyle = {
        position: "relative",
        left : "1000px",
        bottom: "10"
  };

class HealthBar extends Component {
  render() {
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