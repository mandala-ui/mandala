import React from 'react';
import PropTypes from 'prop-types';

const Column = props => (
  <div className="column w-100">
    <div className={`${props.borderColor ? `ba b--${props.borderColor}` : ''}
      bg-${props.backgroundColor}
      br${props.radius}
      pa${props.padding}
      w-100`}
    >
      {props.children || null}
    </div>
  </div>
);

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
