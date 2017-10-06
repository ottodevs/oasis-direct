/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import AmountInput from './AmountInput';


describe('(Component) AmountInput', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <AmountInput {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
