function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var SplitButton = function (_PureComponent) {
  _inherits(SplitButton, _PureComponent);

  function SplitButton() {
    _classCallCheck(this, SplitButton);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  SplitButton.prototype.render = function render() {
    var _props = this.props,
        baseColor = _props.baseColor,
        disabled = _props.disabled,
        isOn = _props.isOn,
        offColor = _props.offColor,
        offText = _props.offText,
        onClick = _props.onClick,
        onColor = _props.onColor,
        onText = _props.onText,
        rounded = _props.rounded;

    return React.createElement(
      'div',
      { className: 'split-button' },
      React.createElement(
        'div',
        {
          className: 'b--gray ba\n            ' + (rounded ? 'br-pill' : 'br2') + ' flex h2 overflow-hidden w4'
        },
        React.createElement(
          'button',
          {
            className: 'bn w-50\n              ' + (disabled ? 'o-60' : 'pointer') + '\n              ' + (isOn ? 'bg-' + baseColor + ' shadow-2 z-1' : 'bg-' + offColor),
            disabled: disabled ? 'disabled' : null,
            onClick: onClick
          },
          React.createElement(
            'span',
            { className: (isOn ? 'gray' : 'white') + ' f7 tracked-light ttu' },
            offText
          )
        ),
        React.createElement(
          'button',
          {
            className: 'bn w-50\n              ' + (disabled ? 'o-60' : 'pointer') + '\n              ' + (isOn ? 'bg-' + onColor + ' gray' : 'bg-' + baseColor + ' shadow-2'),
            disabled: disabled ? 'disabled' : null,
            onClick: onClick
          },
          React.createElement(
            'span',
            { className: 'f7 tracked-light ttu ' + (isOn ? 'white' : 'gray') },
            onText
          )
        )
      )
    );
  };

  return SplitButton;
}(PureComponent);

SplitButton.propTypes = process.env.NODE_ENV !== "production" ? {
  baseColor: PropTypes.string,
  disabled: PropTypes.bool,
  isOn: PropTypes.bool,
  offColor: PropTypes.string,
  offText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onColor: PropTypes.string,
  onText: PropTypes.string,
  rounded: PropTypes.bool
} : {};

SplitButton.defaultProps = {
  baseColor: 'moon-gray',
  disabled: false,
  isOn: false,
  onClick: null,
  offColor: 'dark-red',
  offText: 'off',
  onColor: 'green',
  onText: 'on',
  rounded: true
};

export default SplitButton;