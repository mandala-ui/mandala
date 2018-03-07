import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Tag extends PureComponent {
  render() {
    const {
      children,
      color,
      large,
    } = this.props;
    const options = `bg-${color} ${large ? 'f5 ph3 pv2' : 'f7 ph2 pv1'}`;
    return (
      <div className={`${options} dib br-pill white`}>
        {children || null}
      </div>
    );
  }
}

Tag.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  large: PropTypes.bool,
};

Tag.defaultProps = {
  children: null,
  color: 'blue',
  large: false,
};

export default Tag;
