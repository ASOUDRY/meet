import React from 'react';
import EventNumber from '../eventNumber';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import { mockData } from '../mockData';
const feature = loadFeature('./src/features/specifyNumberOFEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 4 is the default number', ({ given, when, then }) => {
    	let Numberwrapper
        given('the user hasn’t specified a number of events.', () => {

    	});

    	when('the user opens up the app.', () => {
            Numberwrapper = mount(<EventNumber length={mockData.length}/>)
    	});

    	then(/^the default number that is rendered is (\d+)$/, (arg0) => {
            Numberwrapper = mount(<EventNumber length={mockData.length}/>)  
            expect(Numberwrapper.state('number')).toEqual(4)   
    	});
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
    	given('the user wants to change the number of events they see', () => {

    	});
        let Numberwrapper
    	when('the user changes the input number', () => {
            let test = 5;
            Numberwrapper = mount(<EventNumber length={mockData.length} passNumber={() => {
                    
            }}/>)
            Numberwrapper.find('input').simulate('change', {target: {value: 3}});
    	});

    	then('the number of events displayed will change.', () => {
            // const passNumber = jest.fn(() => true)
            // const changeInput = jest.fn(() => {
            //     Numberwrapper.setState('number').toBe(3)
            // })
            // expect(changeInput())
    	});
    });

 
})