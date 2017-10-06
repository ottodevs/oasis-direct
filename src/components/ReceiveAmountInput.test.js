/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import ReceiveAmountInput from './ReceiveAmountInput';


describe('(Component) ReceiveAmountInput', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <ReceiveAmountInput {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
