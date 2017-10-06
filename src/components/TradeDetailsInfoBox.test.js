/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import TradeDetailsInfoBox from './TradeDetailsInfoBox';


describe('(Component) TradeDetailsInfoBox', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <TradeDetailsInfoBox {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
