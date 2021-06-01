import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import Event from '../Event'
import { mount } from 'enzyme';
import { mockData } from '../mockData';
import App from '../App';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

	test('An event element is collapsed by default', ({ given, and, when, then }) => {
		let EventWrapper
    	given('the user did not expand any event', () => { });
		let AppWrapper	
    	and('the app has mounted', () => {
			AppWrapper = mount(<App />);

    	});

    	when('all the events are loaded', () => {
			AppWrapper.update();
			expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    	});

    	then('all the event element will already be collapsed', () => {
			EventWrapper = mount(<Event event={mockData} />)
			expect(EventWrapper.state('show')).toBe(false);
    	});
    });

    test('User can expand an event to see its details', ({ given, and, when, then }) => {
		let AppWrapper	
    	given('the app is loaded', () => {
			AppWrapper = mount(<App />);
    	});

    	and('all the events are loaded', () => {
			AppWrapper.update();
			expect(AppWrapper.find('.event')).toHaveLength(mockData.length);

    	});
		let EventWrapper
    	when('user clicks on “Show details” button for an event', () => {
			EventWrapper = mount(<Event event={mockData} />)
			EventWrapper.find('.button').simulate('click')

    	});

    	then('the event element will be expanded to show the event details', () => {
			expect(EventWrapper.state('show')).toBe(true);
    	});
    });

    test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    	let AppWrapper
		given('the app is loaded', () => {
			AppWrapper = mount(<App />);
    	});
		let EventWrapper = mount(<Event event={mockData} />)
    	and('the user expanded event details', () => {
			EventWrapper.find('.button').simulate('click')
			expect(EventWrapper.state('show')).toBe(true);
    	});

    	when('user clicks on “Close” button for an event', () => {
			EventWrapper.find('.closing').first().simulate('click')
			
    	});

    	then('the event element will hide its details.', () => {
			EventWrapper.update
			expect(EventWrapper.state('show')).toBe(false);
    	});
    });
});