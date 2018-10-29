import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';

const textPanel = {
    padding: "80px",
    background: "linear-gradient(to bottom, #6c6eb2 0%,#181870 64%,#000028 100%)",
    borderRadius: "8px",
    border:" 4px solid #eaebea",
    width: "960px",
    height: "50px",
  };

const textStyle = {
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily:  'Press Start 2P',
    lineHeight: '1'
  };

class TextPanel extends Component {
  render() {
    return (
      <Row>
        <Col xs={"2"}>
          <div style={textPanel}>
            <p className="text" style={textStyle}>{this.props.message}</p>
            <p className="text" style={textStyle}>{this.props.message2}</p>
          </div>
        </Col>
      </Row>
      );
    }
  }

export default TextPanel;