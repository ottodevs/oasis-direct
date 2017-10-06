/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import Pictogram from './Pictogram';


describe('(Component) Pictogram', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <Pictogram {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
