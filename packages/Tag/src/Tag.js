import React from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash/clamp';

const Tag = ({
  children,
  color,
  large,
  pill,
  radius,
}) => {
  const isLarge = `${large ? 'f5 ph3 pv2' : 'f7 ph2 pv1'}`;
  const isPill = `${pill ? 'br-pill' : `br${clamp(radius, 0, 4)}`}`;
  return (
    <div className="tag">
      <span className={`bg-${color} ${isPill} ${isLarge} dib white`}>
        {children || null}
      </span>
    </div>
  );
};

Tag.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  large: PropTypes.bool,
  pill: PropTypes.bool,
  radius: PropTypes.oneOf([0, 1, 2, 3, 4]),
};

Tag.defaultProps = {
  children: null,
  color: 'black',
  large: false,
  pill: false,
  radius: 0,
};

export default Tag;
