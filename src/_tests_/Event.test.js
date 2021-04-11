import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mockData';
import { extractSummary } from "../api";

describe('<Event/> component', () => {
    let EventWrapper, Summary;
    beforeAll(() => {
        Summary = extractSummary(mockData)
        EventWrapper = shallow(<Event/>)
    })
    test('render initial box', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    })
    test('render see more button', () => {
        expect(EventWrapper.find('.button')).toHaveLength(1);
    })
    test('render wrapper content', () => {
        expect(EventWrapper.find('.summary').contains(Summary)).toBe(true);
})
})
