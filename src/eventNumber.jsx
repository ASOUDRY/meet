import React, { Component } from "react";

class EventNumber extends Component {
  
  state = {
    number: this.props.length
  }

  componentDidMount() {
    this.setState({
      number: this.props.length
    })
  }

  changeInput = (input) => {
    let newInput = input.target.value;
    this.setState({
      number: newInput
    })
    this.props.passNumber(newInput)
  }

  render() {
    let push = this.state.number
    return (
      <div className="numberOfEvents">
        <h1>Number of Events:</h1>
        <input className="eventNumberInput"
          type="number"
          value={push}
          onChange={this.changeInput}
        />
      </div>
    );
  }
}

export default EventNumber;