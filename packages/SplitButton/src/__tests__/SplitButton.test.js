import React from 'react';
import { shallow } from 'enzyme';
import SplitButton from '../SplitButton';

describe('<SplitButton />', () => {
  const mockFn = jest.fn();
  const component = shallow(<SplitButton onClick={mockFn} />);

  it('fires it\'s onClick click prop when clicked', () => {
    component.find('button').first().simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('renders Default (OFF) correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders ON correctly', () => {
    expect(shallow(
      <SplitButton
        onClick={mockFn}
        isOn
      />,
    ))
      .toMatchSnapshot();
  });

  it('renders Pill correctly', () => {
    expect(shallow(
      <SplitButton
        onClick={mockFn}
        pill
      />,
    ))
      .toMatchSnapshot();
  });

  it('renders Radius 0 correctly', () => {
    expect(shallow(
      <SplitButton
        onClick={mockFn}
        radius={0}
      />,
    ))
      .toMatchSnapshot();
  });
  it('renders Radius 1 correctly', () => {
    expect(shallow(
      <SplitButton
        onClick={mockFn}
        radius={1}
      />,
    ))
      .toMatchSnapshot();
  });
  it('renders Radius 2 correctly', () => {
    expect(shallow(
      <SplitButton
        onClick={mockFn}
        radius={2}
      />,
    ))
      .toMatchSnapshot();
  });
  it('renders Radius 3 correctly', () => {
    expect(shallow(
      <SplitButton
        onClick={mockFn}
        radius={3}
      />,
    ))
      .toMatchSnapshot();
  });
  it('renders Radius 4 correctly', () => {
    expect(shallow(
      <SplitButton
        onClick={mockFn}
        radius={4}
      />,
    ))
      .toMatchSnapshot();
  });

  it('renders No Text correctly', () => {
    expect(shallow(
      <SplitButton
        onClick={mockFn}
        showLabels={false}
      />,
    ))
      .toMatchSnapshot();
  });

  it('renders Disabled state correctly', () => {
    expect(shallow(
      <SplitButton
        disabled
        onClick={mockFn}
      />,
    ))
      .toMatchSnapshot();
  });
});
