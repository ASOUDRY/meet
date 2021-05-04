import React, { Component } from 'react';

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: []
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    console.log(value);
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });

    console.log(suggestions);

  this.isClicked = (suggestion) => {
    this.setState({
      query: suggestion
    });
  }
    
    this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion
    });
  
    this.props.updateEvents(suggestion);
  }


  render() {
    // console.log(this.state.suggestions);
    return (
      <div className="CitySearch">
          <input
        type="text"
        className="city"
        value={this.state.query}
        onChange={this.handleInputChanged}
      />
       <ul className="suggestions">
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => this.isClicked(suggestion)}>
                {suggestion}
            </li>
          ))}
            <li className="all" onClick={() => this.handleItemClicked("all")}>
              <b>See all cities</b>
            </li>
      </ul>
      </div>
    )
  }
}

export default CitySearch;