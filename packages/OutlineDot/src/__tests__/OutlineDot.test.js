import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import OutlineDot from '../OutlineDot';

configure({ adapter: new Adapter() });

describe('<OutlineDot />', () => {
  describe('Rendering', () => {
    it('renders Default', () => {
      expect(shallow(
        <OutlineDot />,
      )).toMatchSnapshot();
    });
    it('renders a different color outline', () => {
      expect(shallow(
        <OutlineDot
          borderColor="blue"
        />,
      )).toMatchSnapshot();
    });
    it('renders a thicker border', () => {
      expect(shallow(
        <OutlineDot
          borderWidth={2}
        />,
      )).toMatchSnapshot();
    });
    it('renders a thicker inner area', () => {
      expect(shallow(
        <OutlineDot
          innerBorderWidth={2}
        />,
      )).toMatchSnapshot();
    });
    it('renders a different color inner area', () => {
      expect(shallow(
        <OutlineDot
          innerColor="red"
        />,
      )).toMatchSnapshot();
    });
    it('renders a different color dot', () => {
      expect(shallow(
        <OutlineDot
          color="blue"
        />,
      )).toMatchSnapshot();
    });
    it('renders no borders', () => {
      expect(shallow(
        <OutlineDot
          innerBorderWidth={0}
          borderWidth={0}
        />,
      )).toMatchSnapshot();
    });
    it('renders a large version', () => {
      expect(shallow(
        <OutlineDot
          large
        />,
      )).toMatchSnapshot();
    });
    it('renders no borders and large', () => {
      expect(shallow(
        <OutlineDot
          borderColor="green"
          borderWidth={0}
          color="green"
          innerColor="white"
          innerBorderWidth={0}
          large
        />,
      )).toMatchSnapshot();
    });
  });
});
