import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {

  render() {
    const baseStyle = 'anti-aliased bn br1 dib f6 system-sans-serif lh-solid outline-0 ttu white';

    return (
      <button
        className={`button ${baseStyle} ${this.props.className} ${this.props.disabled ? 'o-50' : ''}`}
        disabled={this.props.disabled ? 'disabled' : null}
        onClick={this.handleClick}
        role="button"
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
  disabled: false,
};

export default Button;
