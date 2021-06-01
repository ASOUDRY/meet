import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventNumber from './eventNumber';
import { getEvents, extractLocations } from './api';
import "./nprogress.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      locations: [],
      number: 32
    }
  }


componentDidMount() {
  getEvents().then((first) => {
    this.setState({
      events: first,
      number: first.length,
      locations: extractLocations(first)
    })
  })
}

filterEventsByCity = (location) => {
  getEvents().then((events) => {
    const locationEvents = (location === 'all') ?
    events :
    events.filter((event) => event.location === location)
    this.setState({
      events: locationEvents,
      number: locationEvents.length
    })
  })
}

filterByNumber = (number) => {
  getEvents().then((event) => {
    let filtering = event.length
    if (event.length === number) {
      this.setState({
        events: event
      })
    }
    else if (event.length > number) {
      for (number; filtering > number; number++) {
        event.shift()
      } 
      this.setState({
        events: event
      })
    }
    else {
  }
  })
}

componentWillUnmount() {
  // fix Warning: Can't perform a React state update on an unmounted component
  this.setState = (state,callback)=>{
      return;
  };
}

render() {
    return (
      <div className="App">
         <CitySearch locations={this.state.locations} updateEvents={this.filterEventsByCity}  />
         <EventNumber length={this.state.number} passNumber={this.filterByNumber}/>
         <EventList events={this.state.events} 
        //  filterEvents={this.filterEvents} 
         />
      </div>
    )
  }
}

export default App;
