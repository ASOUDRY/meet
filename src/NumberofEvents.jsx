import React, { Component } from "react";

class NumberOfEvents extends Component {
  
  state = {
    number: this.props.length
  }

  // componentDidMount() {
  //   this.setState({
  //     number: this.props.length
  //   })
  // }


  changeInput = (event) => {
    const value = event.target.value;
    this.setState({
      number: value
    })
    this.props.passNumber(value)
  }

  render() {
    console.log(this.state.number)
    return (
      <div className="numberOfEvents">
        <h1>Number of Events:</h1>
        <input
          type="number"
          value={this.state.number}
          onChange={this.changeInput}
        />
      </div>
    );
  }
}

export default NumberOfEvents;