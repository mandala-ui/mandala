import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ListItem extends PureComponent {
  render() {
    const { borderColor, borderWidth, children, hasBorder } = this.props;
    const borders = `${borderWidth === 0 ? '' : `bw${borderWidth}`} ${hasBorder ? `bb b--${borderColor}` : 'bb b--transparent'}`;
    return (
      <li className={`list-item ${borders}`}>
        {children || null}
      </li>
    );
  }
}

ListItem.propTypes = {
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  hasBorder: PropTypes.bool,
  children: PropTypes.node,
};

ListItem.defaultProps = {
  borderColor: 'gray',
  borderWidth: 0,
  children: null,
  hasBorder: false,
};

export default ListItem;
