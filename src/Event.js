import React, { Component } from "react";

class Event extends Component {
  render() {
    return <div className="event">
      <div className="summary" ></div>
      <button type="button" className="button">Show Details</button>
    </div>;
  }
}
export default Event;