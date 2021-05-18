import React, { Component } from "react";

class NumberOfEvents extends Component {
  
  changeInput = () => {
    console.log(this.value);
  }

  render() {
    return (
      <div className="numberOfEvents">
        <h1>Number of Events:</h1>
        <input
          type="number"
          value={this.props.length}
          onChange={this.changeInput}
        />
      </div>
    );
  }
}

export default NumberOfEvents;