import React from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash/clamp';

const ProgressBar = ({
  background,
  color,
  large,
  percentage,
  rounded }) => {
  const isLarge = `${large ? 'h2' : 'h1'}`;
  const isRounded = `${rounded ? 'br-pill' : ''}`;
  const fill = `bg-${color} ${isLarge} ${isRounded}`;
  const container = `bg-${background} ${isLarge} ${isRounded}`;
  return (
    <div className="progress-bar w-100">
      <div className="w-100">
        <div className={`${container} overflow-hidden w-100`}>
          <div
            className={`${fill} shadow-2`}
            style={{ width: `${clamp(percentage, 0, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

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
