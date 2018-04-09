import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../ListItem';

describe('<ListItem />', () => {
  it('should exist', () => {
    expect(<ListItem />).toBeDefined();
  });

  it('should exist when called', () => {
    expect(shallow(<ListItem />).exists()).toEqual(true);
  });

  it('should render default with no props', () => {
    expect(shallow(<ListItem />)).toMatchSnapshot();
  });

  it('should render less padding with Narrow prop', () => {
    expect(shallow(
      <ListItem
        narrow
      />,
    )).toMatchSnapshot();
  });

  it('should render more padding with Wide prop', () => {
    expect(shallow(
      <ListItem
        wide
      />,
    )).toMatchSnapshot();
  });

  it('should render a gray border if the prop is called', () => {
    expect(shallow(
      <ListItem
        hasBorder
      >
        <span>I am a child</span>
      </ListItem>,
    )).toMatchSnapshot();
  });

  it('should render horizontal padding if indented', () => {
    expect(shallow(
      <ListItem
        indented
      >
        <span>I am a child</span>
      </ListItem>,
    )).toMatchSnapshot();
  });

  it('should render a custom border width', () => {
    expect(shallow(
      <ListItem
        hasBorder
        lineWidth={2}
      >
        <span>I am a child</span>
      </ListItem>,
    )).toMatchSnapshot();
  });
});
