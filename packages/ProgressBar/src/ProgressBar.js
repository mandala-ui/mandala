import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash/clamp';

class ProgressBar extends PureComponent {
  render() {
    const {
      background,
      color,
      large,
      percentage,
      rounded,
    } = this.props;
    const innerClasses = `${large ? 'h2' : 'h1'} bg-${color} ${rounded ? 'br-pill' : ''}`;
    const outerClasses = `bg-${background} ${large ? 'h2' : 'h1'} ${rounded ? 'br-pill' : ''}`;
    return (
      <div className="progress-bar">
        <div className={`${outerClasses} overflow-hidden w-100`}>
          <div
            className={`${innerClasses} shadow-2`}
            style={{ width: `${clamp(percentage, 0, 100)}%` }}
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
  color: 'gray',
  large: false,
  percentage: 50,
  rounded: false,
};

export default ProgressBar;
