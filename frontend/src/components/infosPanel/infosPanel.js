import React, {Component} from 'react';
// import { Row, Col } from 'reactstrap';

const divStyle = {
    borderRadius: "8px",
    border: '4px solid grey',
    padding: "20px",
    width: "400px",
    height: "745px",
    backgroundColor: "white"
  };

const pStyle = {
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: 'bold'
  };

class InfosPanel extends Component {
    render() {
        // console.log("screenpanel",this.props.swordCount)
        return (
          <div style={divStyle}>
            <p style={pStyle}>Infos Panel</p>
            <p>Hero Name</p>
            <p>Level</p>
            <p>Experience</p>
          </div>
        );
    }
}

export default InfosPanel;