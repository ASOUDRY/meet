import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventNumber from './eventNumber';
import { getEvents, extractLocations } from './api';
import { OfflineAlert } from './Alert';
// import { EventGenre }  from './EventGenre';
import  EventGenre  from './EventGenre'
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
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
    console.log("component is mounted")
    this.setState({
      events: first,
      number: first.length,
      locations: extractLocations(first)
    })
    if (!navigator.onLine) {
      this.setState({
        infoText: "The app is offline. The events may no longer be up to date. In addition you cannot filter events by city at the moment. Please reconnect if you wish to do so."
      })
    }
  })
}

getData = () => {
  const {locations, events} = this.state;
  const data = locations.map((location)=>{
    const number = events.filter((event) => event.location === location).length
    const city = location.split(' ').shift()
    return {city, number};
  })
  return data;
};


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
         <OfflineAlert text={this.state.infoText} />
         <EventNumber length={this.state.number} passNumber={this.filterByNumber}/>
         
           <div className="data-vis-wrapper">
           <EventGenre events={this.state.events}/>
           <ResponsiveContainer height={400} >
         <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20, }} >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city"/>
          <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={this.getData()} fill="#8884d8" />
        </ScatterChart>
         </ResponsiveContainer>
           </div>
         
       
         <EventList events={this.state.events} 
        //  filterEvents={this.filterEvents} 
         />
      </div>
    )
  }
}

export default App;
