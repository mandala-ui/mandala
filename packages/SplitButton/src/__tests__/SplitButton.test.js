import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SplitButton from '../SplitButton';

configure({ adapter: new Adapter() });

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
      />))
      .toMatchSnapshot();
  });

  it('renders Pill correctly', () => {
    expect(shallow(
      <SplitButton
        onClick={mockFn}
        pill
      />))
      .toMatchSnapshot();
  });

  it('renders Radius 1 correctly', () => {
    expect(shallow(
      <SplitButton
        onClick={mockFn}
        radius={1}
      />))
      .toMatchSnapshot();
  });

  it('renders No Text correctly', () => {
    expect(shallow(
      <SplitButton
        onClick={mockFn}
        showText={false}
      />))
      .toMatchSnapshot();
  });

  it('renders Disabled state correctly', () => {
    expect(shallow(
      <SplitButton
        disabled
        onClick={mockFn}
      />))
      .toMatchSnapshot();
  });
});
