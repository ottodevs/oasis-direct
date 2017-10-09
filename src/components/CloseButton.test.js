/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import CloseButton from './CloseButton';


describe('(Component) CloseButton', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <CloseButton {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
