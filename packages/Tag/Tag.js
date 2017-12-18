import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Tag extends PureComponent {
  render() {
    const {
      children,
      color,
    } = this.props;
    return (
      <div className={`bg-${color} br-pill f7 dib ph2 pv1 white helvetica`}>
        {children}
      </div>
    );
  }
}

Tag.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  color: 'blue',
};

export default Tag;
