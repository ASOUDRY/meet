import React from 'react';
import EventNumber from '../eventNumber';
import { shallow, mount } from 'enzyme';

describe('<NumberofEvents /> integration', () => {

        test("check default value of number of events", () => {
            const NumberWrapper = mount(<EventNumber />);
            expect(
              NumberWrapper.find('numberOfEvents').find(".input").prop("value")
            ).toBe(32);
          });


          test("check changing the value of number of events", () => {
            const NumberWrapper = mount(<EventNumber />);
            const NumberState = NumberWrapper.state('number')
            NumberWrapper.find(".input").simulate("change", {
              target: { value: 24 },
            });
        
            expect(NumberState).toBe(24);
          });
})