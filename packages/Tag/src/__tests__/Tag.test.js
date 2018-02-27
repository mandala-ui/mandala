import React from 'react';
import renderer from 'react-test-renderer';
import Tag from '../Tag';

describe('<Tag />', () => {
  it('renders defaults correctly', () => {
    const comp = renderer.create(
      <Tag />,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
