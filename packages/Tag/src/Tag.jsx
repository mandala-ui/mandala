import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({
  children,
  color,
  large }) => {
  const isLarge = `${large ? 'f5 ph3 pv2' : 'f7 ph2 pv1'}`;
  return (
    <div className="tag">
      <span className={`bg-${color} br-pill dib ${isLarge} white`}>
        {children || null}
      </span>
    </div>
  );
};

Tag.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  large: PropTypes.bool,
};

Tag.defaultProps = {
  children: null,
  color: 'blue',
  large: false,
};

export default Tag;
