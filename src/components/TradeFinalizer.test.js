/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import TradeFinalizer from './TradeFinalizer';


describe('(Component) TradeFinalizer', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <TradeFinalizer {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
