import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
    let test = 5;
  return (
    <ul className="EventList">
      {this.props.events.map(event =>
        <li key={event.id}>
          <Event event={event} test={test}  />
        </li>
      )}
    </ul>
  );
  }
}

export default EventList;