import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event/> component', () => {
    let EventWrapper = shallow(<Event />)

test('render initial box', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
})

test('render see more button', () => {
    expect(EventWrapper.find('.button')).toHaveLength(1);
})})