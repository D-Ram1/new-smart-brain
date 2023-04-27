import React from 'react';
import { shallow } from 'enzyme';
import Rank from './Rank';

it('renders without crashing', () => {
    expect(shallow(<Rank />)).toMatchSnapshot();
})