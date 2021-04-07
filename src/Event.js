import React, { Component } from "react";
import { mockData } from './mockData';

class Event extends Component {
  render() {
    return <div className="event">
      <h3 className="summary">{mockData[0].summary}</h3>
      <button type="button" className="button">Show Details</button>
    </div>;
  }
}
export default Event;