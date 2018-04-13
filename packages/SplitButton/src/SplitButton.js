import React from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash/clamp';

const SplitButton = ({
  backgroundColor,
  disabled,
  isOn,
  offColor,
  onClick,
  onColor,
  pill,
  radius,
  showLabels,
}) => {
  const isDisabled = `${disabled ? 'o-60' : 'pointer'}`;
  const buttonStyle = 'bn shadow-2 w-50';
  const textStyle = 'f7 tracked-light ttu';
  return (
    <div className="split-button">
      <div
        className={`b--gray ba flex h2 overflow-hidden w4
          ${pill ? 'br-pill' : `br${clamp(radius, 0, 4)}`}`
        }
      >
        <button
          className={`${buttonStyle} ${isDisabled} ${isOn ? `bg-${backgroundColor} z-1` : `bg-${offColor}`}`}
          disabled={disabled ? 'disabled' : null}
          onClick={onClick}
        >
          { showLabels ?
            <span className={`${isOn ? 'gray' : 'white'} ${textStyle}`}>
               off
            </span>
            : null
          }
        </button>
        <button
          className={`${buttonStyle} ${isDisabled} ${isOn ? `bg-${onColor} gray` : `bg-${backgroundColor}`}`}
          disabled={disabled ? 'disabled' : null}
          onClick={onClick}
        >
          { showLabels ?
            <span className={`${isOn ? 'white' : 'gray'} ${textStyle}`}>
              on
            </span>
            : null
          }
        </button>
      </div>
    </div>
  );
};

SplitButton.propTypes = {
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  isOn: PropTypes.bool,
  offColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onColor: PropTypes.string,
  pill: PropTypes.bool,
  radius: PropTypes.number,
  showLabels: PropTypes.bool,
};

SplitButton.defaultProps = {
  backgroundColor: 'white',
  disabled: false,
  isOn: false,
  offColor: 'dark-red',
  onColor: 'green',
  pill: false,
  radius: 0,
  showLabels: true,
};

export default SplitButton;
