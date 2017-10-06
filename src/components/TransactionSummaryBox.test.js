/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import TransactionSummaryBox from './TransactionSummaryBox';


describe('(Component) TransactionSummaryBox', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <TransactionSummaryBox {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
