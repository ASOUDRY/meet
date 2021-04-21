import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import PropTypes from 'prop-types';
import { mockData } from '../mockData';
import { extractSummary, extractUpdate, extractLocations } from "../api";

describe('<Event/> component', () => {
    let EventWrapper, Summary, Update, locations
    // let event = this.props.event
    beforeAll(() => {
         console.log(this.props.event);
         console.log(event);
         console.log(this.props.nope);
         console.log(nope);
        Summary = extractSummary(mockData),
        Update = extractUpdate(mockData),
        locations = extractLocations(mockData)
        EventWrapper = shallow(<Event event={mockData0} nope={nope} />)
    })
    test('render initial box', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    })
    test('render see more button', () => {
        expect(EventWrapper.find('.button')).toHaveLength(1);
    })
    // test('render wrapper content', () => {
    //     expect(EventWrapper.find('.summary').props()).toMatchObject(Summary);
    // })
    // test('render wrapper content 2', () => {
    //     expect(EventWrapper.find('.content').props()).toMatchObject(Update);
    // })
    // test('render wrapper content 3', () => {
    //     expect(EventWrapper.find('.location').props()).toMatchObject(Location);
    // })
})
