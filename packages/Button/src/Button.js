import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
    const options = `bg-${color} ${pill ? 'br-pill' : `br${radius}`} ${disabled ? 'opacity-40' : 'pointer'}`;
    return (
      <button
        disabled={disabled}
        className={`${options} bn outline-o ph3 pv2 white`}
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
  onClick: PropTypes.func,
  pill: PropTypes.bool,
  radius: PropTypes.number,
};

Button.defaultProps = {
  children: null,
  color: 'gray',
  disabled: false,
  onClick: () => {},
  pill: false,
  radius: 0,
};

export default Button;
