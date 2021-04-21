import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

// import { mockData } from '../mockData';
// import { extractTitle, extractLocations } from "../api";

describe('<Event/> component', () => {
    // let EventWrapper = shallow(<Event />)

//     test("prop", () => {
//         expect(EventWrapper.find(.event)).props().
//     })

test('render initial box', () => {
    let EventWrapper = shallow(<Event />)
    expect(EventWrapper.find('.event')).toHaveLength(1);
})

test('prop', () => {
    let EventWrapper = shallow(<Event prop={prop} />)
    expect(EventWrapper.find('.test')).prop(nope).toEqual(0);
})

})

 
    // test('render see more button', () => {
    //     expect(EventWrapper.find('.button')).toHaveLength(1);
    // })
    // test('render wrapper content 3', () => {
    //     expect(EventWrapper.find('.location').props()).toMatchObject(Location);
    // })