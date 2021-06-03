import React, { Component } from "react";
import {ErrorAlert} from './Alert'

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
    if (newInput > 32 || newInput < -1) {
      this.setState({
        number: newInput,
        infoText: "Please pick a number between 1 and 32"
      })
    }
    else {
      this.setState({
        number: newInput,
        infoText: ""
      })
    } 
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
        <ErrorAlert text={this.state.infoText} />
        <input className="eventNumberInput"
          type="number"
          value={push}
          onChange={this.changeInput}
        />
       <ErrorAlert className="errorAlert" text={this.state.infoText} />
      </div>
    );
  }
}

export default EventNumber;