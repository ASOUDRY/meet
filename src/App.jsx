import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { mockData } from './mockData';
import { getEvents } from './api';

class App extends Component {
state = {
  events: mockData,
  locations: []
}

updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = (location === 'all') ?
    events :
    events.filter((event) => event.location === location)
    this.setState({
      events: locationEvents
    })
  })
}

render() {
    return (
      <div className="App">
         <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}  />
         <EventList events={this.state.events} />
        
      </div>
    )
  }
}

export default App;
