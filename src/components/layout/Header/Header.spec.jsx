import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';

describe('[Header]', () => {
  it('Renders as the last snapshot', () => {
    const wrapper = renderer.create(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
