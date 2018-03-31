import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../Tag';

describe('<Tag />', () => {
  const component = shallow(<Tag />);

  it('renders defaults correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('increases the size if large prop is passed', () => {
    expect(shallow(<Tag large />)).toMatchSnapshot();
  });
});
