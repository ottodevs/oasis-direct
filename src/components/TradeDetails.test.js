/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import TradeDetails from './TradeDetails';


describe('(Component) TradeDetails', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <TradeDetails {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
