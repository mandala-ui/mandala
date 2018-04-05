import React from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash/clamp';

const ProgressBar = ({
  backgroundColor,
  color,
  large,
  percent,
  pill,
}) => {
  const isLarge = `${large ? 'h2' : 'h1'}`;
  const isPill = `${pill ? 'br-pill' : ''}`;
  const fill = `bg-${color} ${isLarge} ${isPill}`;
  const container = `bg-${backgroundColor} ${isLarge} ${isPill}`;
  return (
    <div className="progress-bar w-100">
      <div className="w-100">
        <div className={`${container} overflow-hidden w-100`}>
          <div
            className={`${fill} shadow-2`}
            style={{ width: `${clamp(percent, 0, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  large: PropTypes.bool,
  percent: PropTypes.number,
  pill: PropTypes.bool,
};

ProgressBar.defaultProps = {
  backgroundColor: 'near-white',
  color: 'black',
  large: false,
  percent: 0,
  pill: false,
};

export default ProgressBar;
