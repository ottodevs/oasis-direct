/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import StartTransactionButton from './StartTransactionButton';


describe('(Component) StartTransactionButton', () => {
  it('should render', () => {
    const props = {};
    const wrapper = shallow(
      <StartTransactionButton {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
