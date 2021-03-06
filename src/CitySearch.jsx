import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: []
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
  if (suggestions.length === 0) {
    this.setState({
      query: value,
      infoText: "We can not find the city you are looking for. Please try another city",
      suggestions: []
    })
  }
  else {
    return this.setState({
      query: value,
      suggestions: suggestions,
      infoText: ''
    });
  }
    
  this.handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: []
    });
    this.props.updateEvents(suggestion);
  }
};

  allCitiesAreSelected = (suggestion) => {
    this.setState({
      query: suggestion
    });
  
    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
          <input
        type="text"
        className="city"
        value={this.state.query}
        onChange={this.handleInputChanged}
      />
       <ul className="suggestions">
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>
                {suggestion}
            </li>
          ))}
        </ul>
        <ul className="all" >
            <li onClick={() => this.allCitiesAreSelected("all")}>
              <b>See all cities</b>
            </li>
      </ul>
      </div>
    )
  }
}

export default CitySearch;