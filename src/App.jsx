import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { mockData } from './mockData';
import { getEvents, extractLocations } from './api';
import "./nprogress.css";

class App extends Component {
state = {
  events: [],
  locations: extractLocations(mockData)
}

updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = (location === 'all') ?
    events :
    events.filter((event) => event.location === location)
    console.log(locationEvents);
    this.setState({
      events: locationEvents
    })
    console.log(this.state.events);
  })
}

filterEvents = (number) => {
  console.log(number);
  // getEvents().then(() => {
  //   const filtration = (events.length !== number) ?
  //   events.filter((event) => {
  //     event
  //   }):

  //   this.setState({
  //     events: filtration
  //   })
  // })
}

render() {
    return (
      <div className="App">
         <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}  />
         <EventList events={this.state.events} filterEvents={this.filterEvents} />
        
      </div>
    )
  }
}

export default App;
