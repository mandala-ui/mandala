import React from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash/clamp';

const SplitButton = ({
  baseColor,
  disabled,
  isOn,
  offColor,
  onClick,
  onColor,
  pill,
  radius,
  showText }) => {
  const isDisabled = `${disabled ? 'o-60' : 'pointer'}`;
  return (
    <div className="split-button">
      <div
        className={`b--gray ba
            ${pill ? 'br-pill' : `br${clamp(radius, 0, 3)}`} flex h2 overflow-hidden w4`}
      >
        <button
          className={`bn w-50
              ${isDisabled}
              ${isOn ? `bg-${baseColor} shadow-2 z-1` : `bg-${offColor}`}`}
          disabled={disabled ? 'disabled' : null}
          onClick={onClick}
        >
          <span className={`f7 tracked-light ttu ${isOn ? 'gray' : 'white'} `}>
            { showText ? 'off' : null }
          </span>
        </button>
        <button
          className={`bn w-50
              ${isDisabled}
              ${isOn ? `bg-${onColor} gray` : `bg-${baseColor} shadow-2`}`}
          disabled={disabled ? 'disabled' : null}
          onClick={onClick}
        >
          <span className={`f7 tracked-light ttu ${isOn ? 'white' : 'gray'}`}>
            { showText ? 'on' : null}
          </span>
        </button>
      </div>
    </div>
  );
};


SplitButton.propTypes = {
  baseColor: PropTypes.string,
  disabled: PropTypes.bool,
  isOn: PropTypes.bool,
  offColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onColor: PropTypes.string,
  pill: PropTypes.bool,
  radius: PropTypes.number,
  showText: PropTypes.bool,
};

SplitButton.defaultProps = {
  baseColor: 'moon-gray',
  disabled: false,
  isOn: false,
  offColor: 'dark-red',
  offText: 'off',
  onColor: 'green',
  onText: 'on',
  pill: false,
  radius: 0,
  showText: true,
};

export default SplitButton;
