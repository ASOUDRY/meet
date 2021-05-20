import React, { Component } from "react";

class NumberOfEvents extends Component {
  
  state = {
    number: this.props.length
  }

  
  changeInput = (event) => {
    const value = event.target.value;
    this.setState({
      number: value
    })
    this.props.passNumber(value)
  }

  render() {
    let push = this.state.number
    return (
      <div className="numberOfEvents">
        <h1>Number of Events:</h1>
        <input
          type="number"
          value={push}
          onChange={this.changeInput}
        />
      </div>
    );
  }
}

export default NumberOfEvents;