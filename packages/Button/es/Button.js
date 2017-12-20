function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var Button = function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Button.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        color = _props.color,
        debugCss = _props.debugCss,
        disabled = _props.disabled,
        onClick = _props.onClick,
        pill = _props.pill,
        radius = _props.radius;

    var options = 'bg-' + color + ' ' + (pill ? 'br-pill' : 'br' + radius) + ' ' + (disabled ? 'opacity-40' : 'pointer');
    return React.createElement(
      'div',
      { className: 'button ' + (debugCss ? 'debug' : '') },
      React.createElement(
        'button',
        {
          disabled: disabled,
          className: options + ' bn outline-o ph3 pv2 dim white',
          onClick: onClick
        },
        children
      )
    );
  };

  return Button;
}(PureComponent);

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  debugCss: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  pill: PropTypes.bool,
  radius: PropTypes.number
} : {};

Button.defaultProps = {
  children: null,
  color: 'blue',
  debugCss: false,
  disabled: false,
  pill: false,
  radius: 2
};

export default Button;