import React from 'react';
import PropTypes from 'prop-types';

const OutlineDot = ({
  borderColor,
  borderWidth,
  color,
  innerBorderWidth,
  innerColor,
  large }) => {
  const isLarge = `${large ? 'h2 w2' : 'h1 w1'}`;
  const outerBorder = `${borderWidth === 0 ? '' : `bw${borderWidth}`}`;
  const innerBorder = `${innerBorderWidth === 0 ? '' : `bw${innerBorderWidth}`}`;
  return (
    <div className={`br-100 flex items-center justify-center ${isLarge}`}>
      <span className={`b--${borderColor} ba ${outerBorder} br-100 flex items-center justify-center ${isLarge}`}>
        <div className={`ba bg-${color} br-100 b--${innerColor} ${innerBorder} ${isLarge}`} />
      </span>
    </div>
  );
};

OutlineDot.propTypes = {
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  innerColor: PropTypes.string,
  color: PropTypes.string,
  innerBorderWidth: PropTypes.number,
  large: PropTypes.bool,
};

OutlineDot.defaultProps = {
  borderColor: 'black',
  borderWidth: 0,
  innerBorderWidth: 1,
  innerColor: 'white',
  color: 'black',
  large: false,
};

export default OutlineDot;
