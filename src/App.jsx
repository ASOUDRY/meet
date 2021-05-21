import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventNumber from './eventNumber';
// import { mockData } from './mockData';
import { getEvents, extractLocations } from './api';
import "./nprogress.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      locations: [],
      number: 32,
      storage: []
    }
  }


componentDidMount() {
  getEvents().then((first) => {
    this.setState({
      events: first,
      storage: first,
      number: first.length,
      locations: extractLocations(first)
    })
  })
}

updateEvents = (location) => {
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

passNumber = (number) => {
  getEvents().then((event) => {
    let filtering = event.length
    if (event.length === number) {
      this.setState({
        events: event
      })
    }
    else if (event.length > number) {
      console.log(this.state.storage)
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
         <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}  />
         <EventNumber length={this.state.number} passNumber={this.passNumber}/>
         <EventList events={this.state.events} filterEvents={this.filterEvents} />
      </div>
    )
  }
}

export default App;
