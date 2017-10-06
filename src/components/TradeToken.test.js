/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import TradeToken from './TradeToken';


describe('(Component) TradeToken', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <TradeToken {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
