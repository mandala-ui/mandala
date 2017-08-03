import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const minMax = (number) => {
  if (number < 0) {
    return 0;
  }
  if (number > 100) {
    return 100;
  }
  return number;
};

class ProgressBar extends PureComponent {
  render() {
    const {
      background,
      color,
      large,
      percentage,
      rounded,
    } = this.props;
    return (
      <div className="progress-bar">
        <div className={`${large ? 'h2' : 'h1'} bg-${background} ${rounded ? 'br-pill' : ''} w-100 overflow-hidden`}>
          <div
            className={`${large ? 'h2' : 'h1'} bg-${color} ${rounded ? 'br-pill' : ''} shadow-2`}
            style={{ width: `${minMax(percentage)}%` }}
          />
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  large: PropTypes.bool,
  percentage: PropTypes.number,
  rounded: PropTypes.bool,
};

ProgressBar.defaultProps = {
  background: 'light-gray',
  color: 'blue',
  large: false,
  percentage: 90,
  rounded: true,
};

export default ProgressBar;
