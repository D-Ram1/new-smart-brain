import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

it('renders without crashing', () => {
    expect(shallow(<Register />)).toMatchSnapshot();
})