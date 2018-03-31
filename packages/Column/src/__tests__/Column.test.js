import React from 'react';
import { shallow } from 'enzyme';
import Column from '../Column';

const testContent = (
  <div>
    <span>lorem ipsum</span>
    <span>lorem ipsum</span>
    <span>lorem ipsum</span>
    <span>lorem ipsum</span>
    <span>lorem ipsum</span>
    <span>lorem ipsum</span>
  </div>
);

describe('<Column />', () => {
  const component = shallow(
    <Column>
      {testContent}
    </Column>,
  );

  it('exists', () => {
    expect(component).toBeDefined();
  });

  it('renders defaults correctly', () => {
    expect(shallow(
      <Column />,
    )).toMatchSnapshot();
  });

  it('can render without children', () => {
    expect(component.find('button').children()).toHaveLength(0);
  });

  it('renders a custom background color', () => {
    expect(shallow(
      <Column
        backgroundColor="gray"
      >
        {testContent}
      </Column>,
    )).toMatchSnapshot();
  });

  it('renders a custom border radius', () => {
    expect(shallow(
      <Column
        radius={3}
      >
        {testContent}
      </Column>,
    )).toMatchSnapshot();
  });

  it('renders a custom border color', () => {
    expect(shallow(
      <Column
        borderColor="red"
      >
        {testContent}
      </Column>,
    )).toMatchSnapshot();
  });

  it('renders a custom padding', () => {
    expect(shallow(
      <Column
        borderColor="red"
      >
        {testContent}
      </Column>,
    )).toMatchSnapshot();
  });
});
