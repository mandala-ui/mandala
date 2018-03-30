import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProgressBar from '../ProgressBar';

configure({ adapter: new Adapter() });

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

  it('renders rounded version correctly', () => {
    expect(shallow(<ProgressBar rounded />)).toMatchSnapshot();
  });

  it('renders 0% correctly', () => {
    expect(shallow(<ProgressBar percentage={0} />)).toMatchSnapshot();
  });

  it('renders 100% correctly', () => {
    expect(shallow(<ProgressBar percentage={100} />)).toMatchSnapshot();
  });
});
