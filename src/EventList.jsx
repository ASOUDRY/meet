import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {

  state = {
    number: []
  }

  changeValue = (change) => {
    const newValue = change.target.value;
    this.setState({
      number: newValue
    })
  }
  
  render() {
    return (
    <ul className="EventList">
       <h1>The number of events is </h1>
       <input
       type="text"
       value={this.state.number}
       onChange={this.changeValue}
       />
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