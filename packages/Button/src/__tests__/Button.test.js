import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

const mockFn = jest.fn();
const mockString = 'Click Me';

describe('<Button />', () => {
  const component = shallow(<Button onClick={mockFn} />);
  it('it handles the click with it\'s passed function', () => {
    component.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('can render without children', () => {
    expect(component.find('button').children()).toHaveLength(0);
  });

  it('can render children', () => {
    expect(shallow(
      <Button onClick={mockFn}>
        {mockString}
      </Button>,
    ).find('button').children()).toHaveLength(1);
  });


  describe('Rendering', () => {
    it('renders Default', () => {
      expect(shallow(
        <Button
          onClick={mockFn}
        >
          {mockString}
        </Button>,
      )).toMatchSnapshot();
    });

    it('renders Disabled', () => {
      expect(shallow(
        <Button
          disabled
          onClick={mockFn}
        >
          {mockString}
        </Button>,
      )).toMatchSnapshot();
    });

    it('renders Radius 1', () => {
      expect(shallow(
        <Button
          radius={1}
          onClick={mockFn}
        >
          {mockString}
        </Button>,
      )).toMatchSnapshot();
    });

    it('renders Radius 2', () => {
      expect(shallow(
        <Button
          radius={2}
          onClick={mockFn}
        >
          {mockString}
        </Button>,
      )).toMatchSnapshot();
    });

    it('renders Radius 3', () => {
      expect(shallow(
        <Button
          radius={3}
          onClick={mockFn}
        >
          {mockString}
        </Button>,
      )).toMatchSnapshot();
    });

    it('renders Pill', () => {
      expect(shallow(
        <Button
          pill
          onClick={mockFn}
        >
          {mockString}
        </Button>,
      )).toMatchSnapshot();
    });

    it('can render custom color', () => {
      expect(shallow(
        <Button
          color="blue"
          onClick={mockFn}
        >
          {mockString}
        </Button>,
      )).toMatchSnapshot();
    });
  });
});
