import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SplitButton extends PureComponent {
  render() {
    const {
      baseColor,
      disabled,
      isOn,
      offColor,
      offText,
      onClick,
      onColor,
      onText,
      rounded } = this.props;
    return (
      <div className="split-button">
        <div
          className={`b--gray ba
            ${rounded ? 'br-pill' : 'br2'} flex h2 overflow-hidden w4`}
        >
          <button
            className={`bn w-50
              ${disabled ? 'o-60' : 'pointer'}
              ${isOn ? `bg-${baseColor} shadow-2 z-1` : `bg-${offColor}`}`}
            disabled={disabled ? 'disabled' : null}
            onClick={onClick}
          >
            <span className={`${isOn ? 'gray' : 'white'} f7 tracked-light ttu`}>
              {offText}
            </span>
          </button>
          <button
            className={`bn w-50
              ${disabled ? 'o-60' : 'pointer'}
              ${isOn ? `bg-${onColor} gray` : `bg-${baseColor} shadow-2`}`}
            disabled={disabled ? 'disabled' : null}
            onClick={onClick}
          >
            <span className={`f7 tracked-light ttu ${isOn ? 'white' : 'gray'}`}>
              {onText}
            </span>
          </button>
        </div>
      </div>
    );
  }
}

SplitButton.propTypes = {
  baseColor: PropTypes.string,
  disabled: PropTypes.bool,
  isOn: PropTypes.bool,
  offColor: PropTypes.string,
  offText: PropTypes.string,
  onClick: PropTypes.func,
  onColor: PropTypes.string,
  onText: PropTypes.string,
  rounded: PropTypes.bool,
};

SplitButton.defaultProps = {
  baseColor: 'moon-gray',
  disabled: false,
  isOn: false,
  onClick: null,
  offColor: 'dark-red',
  offText: 'off',
  onColor: 'green',
  onText: 'on',
  rounded: true,
};

export default SplitButton;
