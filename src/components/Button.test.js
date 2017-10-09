/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import Button from './Button';


describe('(Component) Button', () => {
  it('should render', () => {
    const props = {};
    const wrapper = shallow(
      <Button {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
