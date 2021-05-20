import React from 'react';
import NumberOFEvents from './NumberofEvents';
import { shallow, mount } from 'enzyme';

describe('<NumberofEvents /> integration', () => {

    test('Number of Events displays the proper number of events ', () => {
        const NumberWrapper = mount(<NumberofEvents />);
        const NumberState = NumberWrapper.state('Number')

        expect(NumberState).toEqual()

})
})