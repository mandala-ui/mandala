import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Tag from '../Tag';

configure({ adapter: new Adapter() });

describe('<Tag />', () => {
  const component = shallow(<Tag />);

  it('renders defaults correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('increases the size if large prop is passed', () => {
    expect(shallow(<Tag large />).find('.tag').hasClass('f5 ph3 pv2')).toEqual(true);
  });
});
