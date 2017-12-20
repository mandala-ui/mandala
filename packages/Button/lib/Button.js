'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    return _react2.default.createElement(
      'div',
      { className: 'button ' + (debugCss ? 'debug' : '') },
      _react2.default.createElement(
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
}(_react.PureComponent);

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired,
  color: _propTypes2.default.string,
  debugCss: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired,
  pill: _propTypes2.default.bool,
  radius: _propTypes2.default.number
} : {};

Button.defaultProps = {
  children: null,
  color: 'blue',
  debugCss: false,
  disabled: false,
  pill: false,
  radius: 2
};

exports.default = Button;
module.exports = exports['default'];