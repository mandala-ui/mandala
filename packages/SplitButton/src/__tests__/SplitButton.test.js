import React from 'react';
import renderer from 'react-test-renderer';
import SplitButton from '../SplitButton';

describe('<SplitButton />', () => {
  it('renders Off correctly', () => {
    const comp = renderer.create(
      <SplitButton />,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
  it('renders On correctly', () => {
    const comp = renderer.create(
      <SplitButton
        isOn
      />,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
