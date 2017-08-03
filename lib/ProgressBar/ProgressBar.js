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

var minMax = function minMax(number) {
  if (number < 0) {
    return 0;
  }
  if (number > 100) {
    return 100;
  }
  return number;
};

var ProgressBar = function (_PureComponent) {
  _inherits(ProgressBar, _PureComponent);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  ProgressBar.prototype.render = function render() {
    var _props = this.props,
        background = _props.background,
        color = _props.color,
        large = _props.large,
        percentage = _props.percentage,
        rounded = _props.rounded;

    return _react2.default.createElement(
      'div',
      { className: 'progress-bar' },
      _react2.default.createElement(
        'div',
        { className: (large ? 'h2' : 'h1') + ' bg-' + background + ' ' + (rounded ? 'br-pill' : '') + ' w-100 overflow-hidden' },
        _react2.default.createElement('div', {
          className: (large ? 'h2' : 'h1') + ' bg-' + color + ' ' + (rounded ? 'br-pill' : '') + ' shadow-2',
          style: { width: minMax(percentage) + '%' }
        })
      )
    );
  };

  return ProgressBar;
}(_react.PureComponent);

ProgressBar.propTypes = process.env.NODE_ENV !== "production" ? {
  background: _propTypes2.default.string,
  color: _propTypes2.default.string,
  large: _propTypes2.default.bool,
  percentage: _propTypes2.default.number,
  rounded: _propTypes2.default.bool
} : {};

ProgressBar.defaultProps = {
  background: 'light-gray',
  color: 'blue',
  large: false,
  percentage: 90,
  rounded: true
};

exports.default = ProgressBar;
module.exports = exports['default'];