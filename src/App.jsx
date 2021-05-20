import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOFEvents from './NumberofEvents';
import { mockData } from './mockData';
import { getEvents, extractLocations } from './api';
import "./nprogress.css";

class App extends Component {
state = {
  events: [],
  locations: extractLocations(mockData),
  number: mockData.length,
  storage: []
}

componentDidMount() {
  getEvents().then((first) => {
    this.setState({
      events: first,
      storage: first
    })
  })
}

updateEvents = (location) => {
  console.log(location)
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
  getEvents().then((results) => {
    let filtering = results.length
    if (results.length === number) {
      this.setState({
        events: results
      })
    }
    else if (results.length > number) {
      console.log(this.state.storage)
      for (number; filtering > number; number++) {
        results.shift()
        console.log(this.state.storage)
      }
      console.log(this.state.storage)
      this.setState({
        events: results
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
         <NumberOFEvents length={this.state.number} passNumber={this.passNumber}/>
         <EventList events={this.state.events} filterEvents={this.filterEvents} />
      </div>
    )
  }
}

export default App;
