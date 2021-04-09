import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
    const { test } = this.props;
    console.log(this.props.events);
  return (
    <ul className="EventList">
      {test.map(event =>
        <li key={event.id}>
          <Event event={event} />
        </li>
      )}
    </ul>
  );
  }
}

export default EventList;