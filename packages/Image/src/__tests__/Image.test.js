import React from 'react';
import { shallow } from 'enzyme';
import Image from '../Image';

describe('<Image />', () => {
  it('exists', () => {
    expect(<Image
      url="http://via.placeholder.com/1600x900/CDECFF"
    />).toBeDefined();
  });
  it('renders defaults correctly', () => {
    expect(shallow(
      <Image
        url="http://via.placeholder.com/1600x900/CDECFF"
      />,
    )).toMatchSnapshot();
  });
  it('renders alt text when passed', () => {
    expect(shallow(
      <Image
        url="http://via.placeholder.com/1600x900/CDECFF"
        alt="horseback rider"
      />,
    )).toMatchSnapshot();
  });
  it('renders an object of images correctly', () => {
    expect(shallow(
      <Image
        url="http://via.placeholder.com/1600x900/CDECFF"
        images={{
          desktop: [
            'http://via.placeholder.com/2400x1350/CDECFF',
            'http://via.placeholder.com/1600x900/CDECFF',
          ],
          mobile: [
            'http://via.placeholder.com/800x450/CDECFF',
            'http://via.placeholder.com/800x450/CDECFF',
          ],
          tablet: [
            'http://via.placeholder.com/1600x900/CDECFF',
            'http://via.placeholder.com/1600x900/CDECFF',
          ],
        }}
      />,
    )).toMatchSnapshot();
  });
  it('renders if the object is malformed', () => {
    expect(shallow(
      <Image
        url="http://via.placeholder.com/1600x900/CDECFF"
        images={{
          desktop: [],
          mobile: [],
          tablet: [],
        }}
      />,
    )).toMatchSnapshot();
  });
  it('renders a Shadow prop', () => {
    expect(shallow(
      <Image
        url="http://via.placeholder.com/1600x900/CDECFF"
        shadow={1}
      />,
    )).toMatchSnapshot();
  });
  it('renders a Radius prop correctly', () => {
    expect(shallow(
      <Image
        url="http://via.placeholder.com/1600x900/CDECFF"
        radius={3}
      />,
    )).toMatchSnapshot();
  });
});
