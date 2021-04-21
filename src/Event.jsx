import React, { Component } from "react";

class Event extends Component {
  
   render() {  
     let nope = 0;
     console.log(nope + 5);
    return <div className="event">
      <h3 className="summary">{this.props.event.summary}</h3>
      <h4 className="content" >{this.props.event.updated}</h4>
      <h4 className="location" >{this.props.event.location}</h4>
      <button type="button" className="button">Show Details</button>
    </div>;
  }
}
export default Event;