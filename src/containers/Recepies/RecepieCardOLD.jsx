import React, {Component} from "react";

class RecepieCardOLD extends Component {

  render() { 
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <span></span>
      </div>
    );
  }
}
 
export default RecepieCardOLD;
