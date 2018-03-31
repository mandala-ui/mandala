import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  borderColor,
  borderWidth,
  children,
  hasBorder,
  indented,
}) => {
  const indents = `${indented ? 'ph3' : ''}`;
  const borders = `${borderWidth === 0 ? '' : `bw${borderWidth}`}
                   ${hasBorder ? `bb b--${borderColor}` : 'bb b--transparent'}`;
  return (
    <li className={`list-item pv3 ${indents} ${borders}`}>
      {children || null}
    </li>
  );
};

ListItem.propTypes = {
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  children: PropTypes.node,
  hasBorder: PropTypes.bool,
  indented: PropTypes.bool,
};

ListItem.defaultProps = {
  borderColor: 'black',
  borderWidth: 0,
  children: null,
  hasBorder: false,
  indented: false,
};

export default ListItem;
