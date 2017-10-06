/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import DepositAmountInput from './DepositAmountInput';


describe('(Component) DepositAmountInput', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <DepositAmountInput {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
