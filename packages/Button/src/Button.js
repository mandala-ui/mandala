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
      <div className="button">
        <button
          disabled={disabled}
          className={`${options} bn outline-o ph3 pv2 dim white`}
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  pill: PropTypes.bool,
  radius: PropTypes.number,
};

Button.defaultProps = {
  children: null,
  color: 'blue',
  debugCss: false,
  disabled: false,
  pill: false,
  radius: 2,
};

export default Button;
