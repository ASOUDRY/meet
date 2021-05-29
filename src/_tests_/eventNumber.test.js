import React from 'react';
import EventNumber from '../eventNumber';
import { mount } from 'enzyme';

describe('<NumberofEvents /> integration', () => {

        test("check default value of number of events", () => {
            const NumberWrapper = mount(<EventNumber passNumber={() => {}}  />);
            expect(
              NumberWrapper.find('numberOfEvents')
              // .find(".input").props()
            )
              // .prop("value")
            // ).toBe(32);
          });

          test("check changing the value of number of events", () => {
            const NumberWrapper = mount(<EventNumber length={32} passNumber={() => {}} />);
            // const NumberState = NumberWrapper.state('number')
            NumberWrapper.find(".input").simulate("change", {
              target: { value: 24 },
            });
            const NumberState = NumberWrapper.state('number')
        
            expect(NumberState).toBe(24);
          });
})