import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import Event from '../Event'
import { mount } from 'enzyme';
import { mockData } from '../mockData';
import App from '../App';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

	test('An event element is collapsed by default', ({ given, when, then }) => {
    	given('the user turns on the application', () => {

    	});
		let AppWrapper
    	when('the user firsts opens up the app', () => {
			AppWrapper = mount(<App />);
    	});
		let EventWrapper
    	then('the event element will already be collapsed', () => {
			EventWrapper = mount(<Event event={mockData} />)
			expect(EventWrapper.state('show')).toBe(false);

    	});
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
    	given('the user wants to the details of a even', () => {

    	});
		let EventWrapper
    	when('user clicks on “Show details” button for an event', () => {
			EventWrapper = mount(<Event event={mockData} />)
			EventWrapper.find('.button').simulate('click')
    	});

    	then('the event element will be expanded to show the event details', () => {
			EventWrapper = mount(<Event event={mockData} />)
			expect(EventWrapper.state('show')).toBe(false);
    	});
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
		let EventWrapper
    	given('the user wants close event element', () => {
			EventWrapper = mount(<Event event={mockData} />)
			EventWrapper.setState({show: true})
    	});

    	when('user clicks on “Close” button for an event', () => {
			EventWrapper = mount(<Event event={mockData} />)
			EventWrapper.find('.button').simulate('click')
    	});

    	then('the event element will hide its details.', () => {
			EventWrapper = mount(<Event event={mockData} />)
			expect(EventWrapper.state('show')).toBe(false);
    	});
    });

});