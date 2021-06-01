import React from 'react';
import EventNumber from '../eventNumber';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
const feature = loadFeature('./src/features/specifyNumberOFEvents.feature');
import App from '../App';
import EventList from '../EventList';


defineFeature(feature, test => {

        test('When user hasn\'t specified event number 32 is the default number', ({ given, when, then }) => {
                given('user hasn\'t specified the number of events', () => { });
                  let AppWrapper;
                  when('the user opens the app', () => {
                    AppWrapper = mount(<App />);
                  });
                  then('the maximum of 32 events will be displayed', () => {
                    AppWrapper.update();
                    expect((AppWrapper.find('.event')).length).toBeLessThanOrEqual(32);
                  });
                });
    
        test('User can change the number of events they want to see', ({ given, when, then }) => {
                let AppWrapper	
                given('the user opened the app', () => {
                 AppWrapper = mount(<App />);
                });
                when('the user changes the number of events', () => {
                AppWrapper.find(EventNumber).find('.eventNumberInput').simulate('change', {target: {value: 2}})
                });
  
                then('the number of events displayed will change.', () => {
                AppWrapper.update()
                expect((AppWrapper.find(EventList).find('.singleEvent')).length).toEqual(2)
                });
        }); 
})