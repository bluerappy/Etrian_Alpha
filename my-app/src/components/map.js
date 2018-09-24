import React, {Component} from 'react';

const mapStyle = {
    border:" 2px solid black",
    width: "50px",
    height: "50px",

  };

const mapGrid = [
    ["A",[1,2,3]],
    ["B",[1,2,3]],
    ["C",[1,2,3]],
    ["D",[1,2,3]],
]

class Map extends Component {
    render() {
        return(
            <div>
                  {mapGrid.map((x, i) => {
                     return (
                          <div key={i} style={mapStyle} className="row">
                          {i}
                          </div>   
                          
                     );
               }
        )}
        
            </div>
        )
      
    }
}

export default Map;