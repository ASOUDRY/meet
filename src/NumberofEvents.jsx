import React, { Component } from "react";

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="numberOfEvents">
        <h1>Number of Events:</h1>
        <input
          type="number"
          value={this.props.length}
        />
      </div>
    );
  }
}

export default NumberOfEvents;