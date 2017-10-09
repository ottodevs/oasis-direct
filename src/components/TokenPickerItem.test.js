/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import TokenPickerItem from './TokenPickerItem';


describe('(Component) TokenPickerItem', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <TokenPickerItem {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
