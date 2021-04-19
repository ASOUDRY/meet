import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
// import Event from './Event';
import { mockData } from './mockData';

class App extends Component {
  render() {
    return (
      <div className="App">
         <EventList events={mockData} />
         <CitySearch />
      </div>
    );
  }
}

export default App;
