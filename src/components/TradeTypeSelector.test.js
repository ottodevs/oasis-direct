/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import TradeTypeSelector from './TradeTypeSelector';


describe('(Component) TradeTypeSelector', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <TradeTypeSelector {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
