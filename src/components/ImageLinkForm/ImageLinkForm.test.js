import React from 'react';
import { shallow } from 'enzyme';
import ImageLinkForm from './ImageLinkForm';

it('renders without crashing', () => {
    expect(shallow(<ImageLinkForm />)).toMatchSnapshot();
})