import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from '../ProgressBar';

describe('<ProgressBar />', () => {
  it('renders defaults correctly', () => {
    const comp = renderer.create(
      <ProgressBar />,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
  it('renders large version correctly', () => {
    const comp = renderer.create(
      <ProgressBar large />,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
