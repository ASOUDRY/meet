import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mockData';

describe('<Event/> component', () => {
    test("event details to be closed on default", () => {
        let EventWrapper = shallow(<Event event={mockData} />)
        expect(EventWrapper.state('show')).toBe(false);
    })
})