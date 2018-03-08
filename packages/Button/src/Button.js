import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash/clamp';

class Button extends PureComponent {
  render() {
    const {
      children,
      color,
      disabled,
      onClick,
      pill,
      radius,
    } = this.props;
    const options = `bg-${color} ${pill ? 'br-pill' : `br${clamp(radius, 0, 3)}`} ${disabled ? 'o-40' : 'pointer'}`;
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
  }
}

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
