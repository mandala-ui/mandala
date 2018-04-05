import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../ProgressBar';

describe('<ProgressBar />', () => {
  it('renders defaults', () => {
    expect(shallow(<ProgressBar />)).toMatchSnapshot();
  });

  it('renders custom color', () => {
    expect(shallow(<ProgressBar color="blue" />)).toMatchSnapshot();
  });

  it('renders custom background color', () => {
    expect(shallow(<ProgressBar color="blue" />)).toMatchSnapshot();
  });

  it('renders large version correctly', () => {
    expect(shallow(<ProgressBar large />)).toMatchSnapshot();
  });

  it('renders pill version correctly', () => {
    expect(shallow(<ProgressBar pill />)).toMatchSnapshot();
  });

  it('renders radius 0 version correctly', () => {
    expect(shallow(<ProgressBar radius={0} />)).toMatchSnapshot();
  });

  it('renders radius 1 version correctly', () => {
    expect(shallow(<ProgressBar radius={1} />)).toMatchSnapshot();
  });

  it('renders radius 2 version correctly', () => {
    expect(shallow(<ProgressBar radius={2} />)).toMatchSnapshot();
  });

  it('renders radius 3 version correctly', () => {
    expect(shallow(<ProgressBar radius={3} />)).toMatchSnapshot();
  });

  it('renders 4% correctly', () => {
    expect(shallow(<ProgressBar percentage={4} />)).toMatchSnapshot();
  });

  it('renders 100% correctly', () => {
    expect(shallow(<ProgressBar percentage={100} />)).toMatchSnapshot();
  });
});
