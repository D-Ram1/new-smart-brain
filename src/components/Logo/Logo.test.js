import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

it('renders without crashing', () => {
    expect(shallow(<Logo />)).toMatchSnapshot();
})