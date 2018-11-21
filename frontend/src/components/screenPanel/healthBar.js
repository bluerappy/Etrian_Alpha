import React, {Component} from 'react';
// import { Row, Col } from 'reactstrap';
import heartImage from '../../images/heart.png';

const heartStyle = {
        position: "relative",
        left : "990px",
        bottom: "10"
  };

class HealthBar extends Component {

  healthIconMap = () => {
    const health = this.props.heroesData.health;
    return health.map((x, i) => {
      return (
        <div key={i} style={heartStyle}>
          <img src={heartImage} alt="heart" width="50" height="50" />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {this.healthIconMap()}
      </div>
      )}
    }

export default HealthBar;