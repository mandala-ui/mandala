function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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

    return React.createElement(
      'div',
      { className: 'progress-bar' },
      React.createElement(
        'div',
        { className: (large ? 'h2' : 'h1') + ' bg-' + background + ' ' + (rounded ? 'br-pill' : '') + ' w-100 overflow-hidden' },
        React.createElement('div', {
          className: (large ? 'h2' : 'h1') + ' bg-' + color + ' ' + (rounded ? 'br-pill' : '') + ' shadow-2',
          style: { width: minMax(percentage) + '%' }
        })
      )
    );
  };

  return ProgressBar;
}(PureComponent);

ProgressBar.propTypes = process.env.NODE_ENV !== "production" ? {
  background: PropTypes.string,
  color: PropTypes.string,
  large: PropTypes.bool,
  percentage: PropTypes.number,
  rounded: PropTypes.bool
} : {};

ProgressBar.defaultProps = {
  background: 'light-gray',
  color: 'blue',
  large: false,
  percentage: 90,
  rounded: true
};

export default ProgressBar;