import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Tag extends PureComponent {
  render() {
    const {
      children,
      color,
    } = this.props;
    return (
      <div className={`bg-${color} br-pill f7 dib ph2 pv1 white`}>
        {children || null}
      </div>
    );
  }
}

Tag.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};

Tag.defaultProps = {
  children: null,
  color: 'gray',
};

export default Tag;
