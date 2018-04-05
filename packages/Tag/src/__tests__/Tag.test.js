import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../Tag';

describe('<Tag />', () => {
  it('exists', () => {
    expect(Tag).toBeDefined();
  });
  it('renders default cerrectly', () => {
    expect(shallow(<Tag />)).toMatchSnapshot();
  });
  it('increases the size if large prop is passed', () => {
    expect(shallow(<Tag large />)).toMatchSnapshot();
  });
  it('renders pill version correctly', () => {
    expect(shallow(<Tag pill />)).toMatchSnapshot();
  });
  it('renders radius 0 correctly', () => {
    expect(shallow(<Tag radius={0} />)).toMatchSnapshot();
  });
  it('renders radius 1 correctly', () => {
    expect(shallow(<Tag radius={1} />)).toMatchSnapshot();
  });
  it('renders radius 2 correctly', () => {
    expect(shallow(<Tag radius={2} />)).toMatchSnapshot();
  });
  it('renders radius 3 correctly', () => {
    expect(shallow(<Tag radius={3} />)).toMatchSnapshot();
  });
  it('renders radius 4 correctly', () => {
    expect(shallow(<Tag radius={4} />)).toMatchSnapshot();
  });
});
