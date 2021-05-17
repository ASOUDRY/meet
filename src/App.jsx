import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOFEvents from './NumberofEvents';
import { mockData } from './mockData';
import { getEvents, extractLocations } from './api';
import "./nprogress.css";

// list of events is glitching real hard. You should probably fix that.

class App extends Component {
state = {
  events: mockData,
  locations: extractLocations(mockData),
  number: mockData.length
}

updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = (location === 'all') ?
    events :
    events.filter((event) => event.location === location)
    console.log(locationEvents);
    this.setState({
      events: locationEvents,
      number: locationEvents.length
    })
    console.log(this.state.events);
    console.log(this.state.number);
  })
}



render() {
    return (
      <div className="App">
         <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}  />
         <NumberOFEvents length={this.state.number}/>
         <EventList events={this.state.events} filterEvents={this.filterEvents} />
        
      </div>
    )
  }
}

export default App;
