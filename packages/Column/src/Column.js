import React from 'react';
import PropTypes from 'prop-types';

const Column = ({
  borderColor,
  backgroundColor,
  children,
  padding,
  radius }) => {
  const borders = `${borderColor ? `ba b--${borderColor}` : ''}`;
  return (
    <div className="column w-100">
      <div className={`${borders} bg-${backgroundColor} br${radius} pa${padding} w-100`}>
        {children || null}
      </div>
    </div>
  );
};

Column.propTypes = {
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  padding: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  radius: PropTypes.oneOf([0, 1, 2, 3, 4]),
};

Column.defaultProps = {
  borderColor: null,
  backgroundColor: 'white',
  children: null,
  padding: 2,
  radius: 0,
};

export default Column;
