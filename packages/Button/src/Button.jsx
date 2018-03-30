import React from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash/clamp';

const Button = ({
  children,
  color,
  disabled,
  onClick,
  pill,
  radius,
}) => {
  const isDisabled = `${disabled ? 'o-40' : 'pointer'}`;
  const isPill = `${pill ? 'br-pill' : `br${clamp(radius, 0, 4)}`}`;
  const options = `bg-${color} ${isPill} ${isDisabled}}`;
  return (
    <button
      disabled={disabled}
      className={`button bn outline-0 ph3 pv2 white ${options}`}
      onClick={onClick}
      style={{ fontFamily: 'inherit' }}
    >
      {children || null}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  pill: PropTypes.bool,
  radius: PropTypes.number,
};

Button.defaultProps = {
  children: null,
  color: 'gray',
  disabled: false,
  pill: false,
  radius: 0,
};

export default Button;
