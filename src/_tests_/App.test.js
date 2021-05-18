import React from 'react';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import { shallow, mount } from 'enzyme';
import { mockData } from '../mockData';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
let AppWrapper;
beforeAll(() => {
  AppWrapper = shallow(<App /> )
})

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
})

describe('<App /> integration', () => {
// const AppWrapper;
// beforeAll(() => {
//   AppWrapper = mount(<App/> )
// })

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    expect(AppWrapper.find(CitySearch).find('.CitySearch')).toHaveLength(1);
    const suggestionItems = AppWrapper.find(CitySearch).find('.all');
    //  await AppWrapper.find(CitySearch).find('.suggestions').find('.all').at(0).simulate('click');
    await suggestionItems.simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });
  
});
