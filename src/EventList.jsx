import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
   
  return (
    <ul className="EventList">
       <h1>The number of events is {this.props.events.length}</h1>
      {this.props.events.map(event =>
        <li key={event.id}>
          <Event event={event} />
        </li>
      )}
    </ul>
  );
  }
}

export default EventList;