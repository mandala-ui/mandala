import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('<Button />', () => {
  it('renders defaults correctly', () => {
    const comp = renderer.create(
      <Button>
        Button
      </Button>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
