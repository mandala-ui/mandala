import React from 'react';
import { shallow } from 'enzyme';
import ListHeader from '../ListHeader';

describe('<ListHeader />', () => {
  it('exists', () => {
    expect(<ListHeader />).toBeDefined();
  });
  describe('Rendering', () => {
    it('renders Default', () => {
      expect(shallow(
        <ListHeader />,
      )).toMatchSnapshot();
    });
    it('renders children', () => {
      expect(shallow(
        <ListHeader>
          <h3>The Top of a List</h3>
        </ListHeader>,
      )).toMatchSnapshot();
    });
    it('can render a line divider', () => {
      expect(shallow(
        <ListHeader
          lined
        >
          <h3>The Top of a List</h3>
        </ListHeader>,
      )).toMatchSnapshot();
    });
    it('can render a different color line', () => {
      expect(shallow(
        <ListHeader
          lineColor="red"
          lined
        >
          <h3>The Top of a List</h3>
        </ListHeader>,
      )).toMatchSnapshot();
    });
    it('can be indented for a contained list', () => {
      expect(shallow(
        <ListHeader
          indented
          lineColor="red"
          lined
        >
          <h3>The Top of a List</h3>
        </ListHeader>,
      )).toMatchSnapshot();
    });
    it('can be have a custom line width of (1)', () => {
      expect(shallow(
        <ListHeader
          lined
          lineWidth={1}
        >
          <h3>The Top of a List</h3>
        </ListHeader>,
      )).toMatchSnapshot();
    });
    it('can be have a custom line width of (2)', () => {
      expect(shallow(
        <ListHeader
          lined
          lineWidth={2}
        >
          <h3>The Top of a List</h3>
        </ListHeader>,
      )).toMatchSnapshot();
    });
    it('can be have a custom line width of (3)', () => {
      expect(shallow(
        <ListHeader
          lined
          lineWidth={3}
        >
          <h3>The Top of a List</h3>
        </ListHeader>,
      )).toMatchSnapshot();
    });
    it('can be have a custom line width of (4)', () => {
      expect(shallow(
        <ListHeader
          lined
          lineWidth={4}
        >
          <h3>The Top of a List</h3>
        </ListHeader>,
      )).toMatchSnapshot();
    });
    it('can be have a custom line width of (5)', () => {
      expect(shallow(
        <ListHeader
          lined
          lineWidth={5}
        >
          <h3>The Top of a List</h3>
        </ListHeader>,
      )).toMatchSnapshot();
    });
  });
});
